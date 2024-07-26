import '@/styles/globals.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import default styles
import CustomToast from '../components/CustomToast'; // Adjust path as needed

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeButton={false} // Prevent default close button
        className="custom-toast-container" // Custom class name for styling
        toastClassName="custom-toast" // Custom class name for toast styling
        bodyClassName="custom-toast-body" // Custom class name for body styling
      />
    </>
  );
}

export default MyApp;
