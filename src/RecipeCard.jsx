import React from 'react'; 

const RecipeCard = ({ recipe }) => { 
  return ( 
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-200"> 
      <div className="relative"> 
        <img 
          className="w-full h-56 object-cover object-center" 
          src={recipe.image} 
          alt={recipe.label} 
          loading="lazy" 
        /> 
        <div className="absolute top-2 left-2 bg-indigo-600 text-white py-1 px-3 rounded-full text-sm"> 
          {recipe.dishType[0]} 
        </div> 
      </div> 
      <div className="p-6"> 
        <h2 className="text-xl font-bold text-gray-800 mb-4 capitalize"> 
          {recipe.label} 
        </h2> 
        <div className="text-gray-600 mb-4"> 
          <strong>Ingredients:</strong> 
          <ul className="list-disc list-inside mt-2"> 
            {recipe.ingredientLines.map((ingredient, index) => ( 
              <li key={index} className="text-sm"> 
                {ingredient} 
              </li> 
            ))} 
          </ul> 
        </div> 
        <div className="flex justify-between items-center"> 
          {/* <a 
            href={recipe.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-semibold hover:underline"
          > 
            View Recipe 
          </a>  */}
          <div className="flex items-center space-x-2"> 
            <span className="text-sm text-black-500 font-bold">Calories:</span> 
            <span className="text-gray-800 font-semibold">{Math.round(recipe.calories)} kcal</span> 
          </div> 
        </div> 
      </div> 
    </div>  
  ); 
}; 

export default RecipeCard;
