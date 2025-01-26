const Box = ({img, title, desc, index}) => {
     return <div className="card bg-base-100 w-72 shadow-xl rounded-4xl  h-100" key={index}>
     <figure>
       <img
         src={img}
         alt="Place image" className="rounded-t-4xl h-50 w-full"/>
     </figure>
     <div className="card-body h-70 w-80 p-4">
       <h2 className="card-title font-extrabold ">{title}</h2>
       <p className="text-gray-600 text-sm">{desc}</p>
       <div className="card-actions justify-end pt-4">
         <button className="btn py-1 px-2 bg-amber-500 rounded-full hover:bg-amber-400 active:bg-amber-300 transition-all active:shadow-inner active:shadow-black">Explore</button>
       </div>
     </div>
   </div>
 }
 
 export default Box;