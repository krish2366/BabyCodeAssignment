import React from 'react'
import {
  Star
} from "lucide-react";

const Testimonial = ({testimonial , index}) => {
  return (
    <div
      key={index}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        "{testimonial.text}"
      </p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-blue-600 font-medium">{testimonial.score}</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial
