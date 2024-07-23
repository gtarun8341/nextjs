const Card = ({ title, description }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    )
  }
  
  export default Card

  