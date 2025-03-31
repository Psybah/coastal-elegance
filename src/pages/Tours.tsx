import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { tourCategories } from '../data/tourData';
import { ArrowRight, Calendar, Users } from 'lucide-react';
// import Breadcrumb from '../components/Breadcrumb';
import TourSearch from '../components/tours/TourSearch';

const Tours: React.FC = () => {
	const [filteredTours, setFilteredTours] = useState(
		tourCategories.flatMap((cat) => cat.tours)
	);
	const [isSearching, setIsSearching] = useState(false);

	const handleSearch = (searchTerm: string) => {
		if (!searchTerm.trim()) {
			// If search is empty, show all tours
			setFilteredTours(tourCategories.flatMap((cat) => cat.tours));
			setIsSearching(false);
			return;
		}
		
		setIsSearching(true);
		const searchTermLower = searchTerm.toLowerCase();
		const filtered = tourCategories
			.flatMap((cat) => cat.tours)
			.filter((tour) => 
				tour.name.toLowerCase().includes(searchTermLower) ||
				tour.description.toLowerCase().includes(searchTermLower) ||
				tour.category.toLowerCase().includes(searchTermLower) ||
				tour.highlights.some(highlight => 
					highlight.toLowerCase().includes(searchTermLower)
				)
			);
		setFilteredTours(filtered);
	};

	return (
		<div className='pt-16 pb-16 min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-r from-brand-brown to-brand-red py-16'>
				<div className="absolute inset-0 opacity-20 bg-[url('/images/tours/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='max-w-3xl'>
						<h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
							Discover Cape Town Tours
						</h1>
						<p className='text-xl text-white/90 mb-8'>
							Experience the best of Cape Town with our expertly guided tours
						</p>
					</div>
				</div>
			</section>

			{/* Search Section */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12'>
				<div className='bg-white rounded-lg shadow-lg p-6'>
					<TourSearch onSearch={handleSearch} />
				</div>
			</div>

			{/* Search Results */}
			{isSearching && (
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16'>
					<h2 className='text-3xl font-bold text-brand-brown mb-8'>Search Results</h2>
					{filteredTours.length > 0 ? (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{filteredTours.map((tour) => (
								<Link
									key={tour.id}
									to={`/tours/${tour.slug}`}
									className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
									<div
										className='h-48 bg-cover bg-center'
										style={{ backgroundImage: `url(${tour.image})` }}
									/>
									<div className='p-6'>
										<h3 className='text-xl font-semibold text-brand-brown mb-2'>
											{tour.name}
										</h3>
										<p className='text-gray-600 mb-4'>{tour.description}</p>
										<div className='flex items-center justify-between'>
											<div className='flex items-center space-x-4'>
												<div className='flex items-center'>
													<Calendar className='h-5 w-5 text-brand-gold mr-2' />
													<span className='text-sm'>{tour.duration}</span>
												</div>
												<div className='flex items-center'>
													<Users className='h-5 w-5 text-brand-gold mr-2' />
													<span className='text-sm'>{tour.groupSize}</span>
												</div>
											</div>
											<ArrowRight className='h-5 w-5 text-brand-red' />
										</div>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className='bg-white rounded-lg shadow-lg p-8 text-center'>
							<p className='text-gray-600'>No tours found matching your search criteria.</p>
						</div>
					)}
				</div>
			)}

			{/* Categories - Only show when not searching */}
			{!isSearching && (
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					{tourCategories.map((category) => (
						<div key={category.id} className='mb-16'>
							<div className='flex justify-between items-center mb-4 md:mb-8'>
								<div>
									<h2 className='text-2xl md:text-3xl font-bold text-brand-brown mb-1 md:mb-2'>
										{category.name}
									</h2>
									<p className='text-sm md:text-base text-gray-600'>{category.description}</p>
								</div>
								<Link
									to={`/tours/category/${category.slug}`}
									className='text-brand-red hover:text-brand-red/80 flex items-center'>
									<span className="hidden md:inline">View All</span>
									<ArrowRight className='ml-0 md:ml-2 h-5 w-5' />
								</Link>
							</div>

							<div className='flex overflow-x-auto hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 snap-x snap-mandatory'>
								{category.tours.slice(0, 3).map((tour) => (
									<Link
										key={tour.id}
										to={`/tours/${tour.slug}`}
										className='flex-none w-[300px] sm:w-[320px] md:w-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow snap-start'>
										<div
											className='h-48 bg-cover bg-center'
											style={{ backgroundImage: `url(${tour.image})` }}
										/>
										<div className='p-4 md:p-6'>
											<h3 className='text-lg md:text-xl font-semibold text-brand-brown mb-2'>
												{tour.name}
											</h3>
											<p className='text-sm md:text-base text-gray-600 mb-4'>{tour.description}</p>
											<div className='flex items-center justify-between'>
												<div className='flex items-center space-x-3 md:space-x-4'>
													<div className='flex items-center'>
														<Calendar className='h-4 w-4 md:h-5 md:w-5 text-brand-gold mr-1 md:mr-2' />
														<span className='text-xs md:text-sm'>{tour.duration}</span>
													</div>
													<div className='flex items-center'>
														<Users className='h-4 w-4 md:h-5 md:w-5 text-brand-gold mr-1 md:mr-2' />
														<span className='text-xs md:text-sm'>{tour.groupSize}</span>
													</div>
												</div>
												<ArrowRight className='h-4 w-4 md:h-5 md:w-5 text-brand-red' />
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			)}

			{/* Email CTA */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='bg-brand-brown rounded-lg p-8 text-center'>
					<h2 className='text-2xl font-bold text-white mb-4'>
						Ready to Book Your Tour?
					</h2>
					<p className='text-white/90 mb-6'>
						Contact us directly on WhatsApp for quick and easy booking!
					</p>
					<a
						href="https://wa.me/27728127533?text=I'm%20interested%20in%20booking%20a%20tour"
						target="_blank"
						rel="noopener noreferrer"
						className='inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors'>
						Book via WhatsApp
						<ArrowRight className='ml-2 h-5 w-5' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Tours;
