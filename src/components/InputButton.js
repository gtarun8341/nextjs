import PropTypes from 'prop-types';

const InputButton = ({ label, value, onChange, placeholder, className, type = 'text', disabled = false }) => {
  return (
    <div
      className={`flex items-center border border-gray-300 rounded-lg px-2 py-1 shadow-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 transition duration-300 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ width: '100%' }} // Full width of container (50% of the parent)
    >
      <span className="text-sm font-medium text-gray-700 mr-2">{label}</span>
      <span className="text-gray-400 mr-2">|</span> {/* Vertical bar */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none focus:outline-none"
        disabled={disabled}
      />
    </div>
  );
};

InputButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputButton;