
function Body() {
    return (
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-w-16 aspect-h-9">
            <img src="/src/assets/image1a.jpeg" alt="Image 1" className="object-cover w-full h-full" />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img src="/src/assets/image2a.jpeg" alt="Image 2" className="object-cover w-full h-full" />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <img src="/src/assets/image3a.jpeg" alt="Image 3" className="object-cover w-full h-full" />
          </div>
        </div>
      </main>
    )
  }
  
  export default Body