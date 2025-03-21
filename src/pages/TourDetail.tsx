// Individual tour page with full details, gallery, booking form
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	Clock,
	Users,
	MapPin,
	Check,
	X,
	Calendar,
	ArrowRight,
} from 'lucide-react';
import { tourCategories } from '../data/tourData';
import Breadcrumb from '../components/Breadcrumb';

const TourDetail: React.FC = () => {
	const { tourSlug } = useParams<{ tourSlug: string }>();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Find the tour
	const tour = tourCategories
		.flatMap((category) => category.tours)
		.find((t) => t.slug === tourSlug);

	// Add this effect to handle image rotation
	useEffect(() => {
		if (tour) {
			const timer = setInterval(() => {
				setCurrentImageIndex((prev) => (prev + 1) % (tour.gallery.length + 1));
			}, 5000);
			return () => clearInterval(timer);
		}
	}, [tour?.gallery?.length]);

	if (!tour) {
		return <div>Tour not found</div>;
	}

	console.log('Current Image:', currentImageIndex === 0 ? tour.image : tour.gallery[currentImageIndex - 1]);
	console.log('All Images:', [tour.image, ...tour.gallery]);

	return (
		<div className="pt-16 pb-16 min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="relative h-[60vh] overflow-hidden">
				{/* Background Image */}
				<div
					className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
					style={{ 
						backgroundImage: `url(${currentImageIndex === 0 ? tour.image : tour.gallery[currentImageIndex - 1]})`,
						transform: 'scale(1.1)',
						opacity: 1
					}}>
					<div className="absolute inset-0 bg-black/40" />
				</div>

				{/* Content */}
				<div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
					<div className="text-white">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.name}</h1>
						<p className="text-xl text-white/90 max-w-2xl">
							{tour.description}
						</p>
					</div>
				</div>

				{/* Image Navigation Dots */}
				<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
					{[tour.image, ...tour.gallery].map((_, idx) => (
						<button
							key={idx}
							onClick={() => setCurrentImageIndex(idx)}
							className={`w-2 h-2 rounded-full transition-all ${
								currentImageIndex === idx ? 'bg-white w-4' : 'bg-white/50'
							}`}
						/>
					))}
				</div>
			</section>

			{/* Breadcrumb */}
			<Breadcrumb
				items={[
					{ label: 'Tours', path: '/tours' },
					{ label: tour.name }
				]}
			/>

			{/* Main Content */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Tour Details */}
					<div className='lg:col-span-2'>
						{/* Quick Info */}
						<div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
								<div className='flex items-center space-x-2'>
									<Clock className='h-5 w-5 text-brand-gold' />
									<span>{tour.duration}</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Users className='h-5 w-5 text-brand-gold' />
									<span>{tour.groupSize}</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Calendar className='h-5 w-5 text-brand-gold' />
									<span>{tour.startTime}</span>
								</div>
								<div className='flex items-center space-x-2'>
									<MapPin className='h-5 w-5 text-brand-gold' />
									<span>Multiple Stops</span>
								</div>
							</div>
						</div>

						{/* Description */}
						<div className='bg-white rounded-lg shadow-lg p-6 mb-8'>
							<h2 className='text-2xl font-semibold text-brand-brown mb-4'>
								Tour Overview
							</h2>
							<p className='text-gray-600 mb-6'>{tour.longDescription}</p>

							{/* Highlights */}
							<h3 className='text-xl font-semibold text-brand-brown mb-4'>
								Tour Highlights
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
								{tour.highlights.map((highlight, index) => (
									<div key={index} className='flex items-start space-x-2'>
										<Check className='h-5 w-5 text-brand-gold flex-shrink-0 mt-1' />
										<span>{highlight}</span>
									</div>
								))}
							</div>

							{/* Itinerary */}
							<h3 className='text-xl font-semibold text-brand-brown mb-4'>
								Tour Itinerary
							</h3>
							<div className='space-y-6'>
								{tour.itinerary.map((item, index) => (
									<div key={index} className='flex space-x-4'>
										<div className='w-20 flex-shrink-0 text-brand-gold font-semibold'>
											{item.time}
										</div>
										<div>
											<p className='font-medium'>{item.description}</p>
											{item.location && (
												<p className='text-sm text-gray-500'>{item.location}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Includes/Excludes */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='bg-white rounded-lg shadow-lg p-6'>
								<h3 className='text-xl font-semibold text-brand-brown mb-4'>
									Included
								</h3>
								<ul className='space-y-2'>
									{tour.includes.map((item, index) => (
										<li key={index} className='flex items-start space-x-2'>
											<Check className='h-5 w-5 text-green-500 flex-shrink-0 mt-1' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
							<div className='bg-white rounded-lg shadow-lg p-6'>
								<h3 className='text-xl font-semibold text-brand-brown mb-4'>
									Not Included
								</h3>
								<ul className='space-y-2'>
									{tour.excludes.map((item, index) => (
										<li key={index} className='flex items-start space-x-2'>
											<X className='h-5 w-5 text-red-500 flex-shrink-0 mt-1' />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					{/* Booking Sidebar */}
					<div className='lg:col-span-1'>
						<div className='sticky top-24'>
							<div className='bg-white rounded-lg shadow-lg p-6'>
								<button
									onClick={() =>
										window.open('https://wa.me/27872656105', '_blank')
									}
									className='w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center'>
									Book via Email
									<ArrowRight className='ml-2 h-5 w-5' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourDetail;
