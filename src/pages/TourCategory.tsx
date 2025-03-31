import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { tourCategories } from '../data/tourData';
import Breadcrumb from '../components/Breadcrumb';

const TourCategory: React.FC = () => {
	const { categorySlug } = useParams<{ categorySlug: string }>();
	const category = tourCategories.find((cat) => cat.slug === categorySlug);

	if (!category) {
		return <div>Category not found</div>;
	}

	return (
		<div className='pt-16 pb-16 min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-r from-brand-brown to-brand-red py-16'>
				<div
					className='absolute inset-0 opacity-20 bg-cover bg-center'
					style={{ backgroundImage: `url(${category.image})` }}></div>
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-white'>
						<h1 className='text-4xl md:text-5xl font-bold mb-4'>
							{category.name}
						</h1>
						<p className='text-xl text-white/90 max-w-2xl'>
							{category.description}
						</p>
					</div>
				</div>
			</section>

			{/* Breadcrumb */}
			<Breadcrumb
				items={[{ label: 'Tours', path: '/tours' }, { label: category.name }]}
			/>

			{/* Tours Grid - Fixed to properly stack on web view */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{category.tours.map((tour) => (
						<Link
							key={tour.id}
							to={`/tours/${tour.slug}`}
							className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
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
											<Clock className='h-4 w-4 md:h-5 md:w-5 text-brand-gold mr-1 md:mr-2' />
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

			{/* WhatsApp CTA */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='bg-brand-brown rounded-lg p-8 text-center'>
					<h2 className='text-2xl font-bold text-white mb-4'>
						Ready to Book Your Tour?
					</h2>
					<p className='text-white/90 mb-6'>
						Contact us directly on WhatsApp for quick and easy booking!
					</p>
					<a
						href={`https://wa.me/27728127533?text=I'm%20interested%20in%20booking%20a%20tour%20in%20the%20${category.name}%20category`}
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

export default TourCategory;
