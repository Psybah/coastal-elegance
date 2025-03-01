import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-brand-brown">
                Home
              </Link>
            </li>
            
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                {index === items.length - 1 || !item.path ? (
                  <span className="text-brand-brown font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.path} className="text-gray-500 hover:text-brand-brown">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;