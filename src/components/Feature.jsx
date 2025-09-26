import React from 'react'

const Feature = ({feature , index}) => {
  return (
    <div
      key={index}
      className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100"
    >
      <div className="mb-6 p-3 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 transition-colors">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default Feature;
