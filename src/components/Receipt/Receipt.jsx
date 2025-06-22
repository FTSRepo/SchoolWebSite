import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const ReceiptPage = () => {
  const receiptRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentId, keyid, regNumber, orderId, schoolid } = location.state || {};

  const [loading, setLoading] = useState(false); // State for loading

  const schoolId = schoolid;
  const regNo = regNumber;
  const fileName = "Registration" + regNumber + ".pdf";

  const handleButtonClick = async () => {
    const apiUrl = 'https://devexamapi.friensys.com/api/printRegistrationslip';
    const payload = {
      schoolId,
      regNo,
      orderId,
      fileName
    };

    setLoading(true); // Set loading to true when the button is clicked

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        // Try to extract URL from result and open in new tab
        try {
          const data = typeof result === 'string' ? JSON.parse(result) : result;
          const url = data.url;
          if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
          } else {
            alert('API call successful but no URL found');
          }
        } catch (error) {
          alert('API call successful but failed to parse URL');
        }
      } else {
        alert('API error: ' + (result.message || 'Something went wrong'));
      }

    } catch (error) {
      console.error('Error during API call:', error);
      alert(error);
    } finally {
      setLoading(false); // Reset loading state after API call
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      // align-items changed to flex-start and padding-top adjusted
      alignItems: 'flex-start', // Align content to the top
      minHeight: '100vh', // Still ensures it takes full viewport height
      // Added a subtle linear gradient background
      background: 'linear-gradient(to bottom right, #e0f2f7, #f0f8ff)', // Light blue to very light blue gradient
      padding: '40px 20px', // Increased top padding to push content down a bit, less side padding
      boxSizing: 'border-box'
    }}>
      <div ref={receiptRef} style={{
        backgroundColor: '#ffffff', // White background for the card
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        padding: '30px 40px',
        width: '100%',
        maxWidth: '850px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        gap: '25px'
      }}>
        {/* Header Section */}
        <div style={{
          borderBottom: '2px solid #e0e0e0',
          paddingBottom: '20px',
          marginBottom: '5px'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#333',
            margin: '0'
          }}>
            Payment Receipt
          </h2>
          <p style={{ fontSize: '15px', color: '#666', margin: '5px 0 0' }}>
            Details of your recent transaction.
          </p>
        </div>

        {/* Data Display - Enhanced Table Structure */}
        <div style={{
          border: '1px solid #dcdcdc',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            backgroundColor: '#eef2f7',
            fontWeight: 'itelic',
            padding: '15px 20px',
            borderBottom: '1px solid #dcdcdc',
            color: '#444',
            fontSize: '15px',
            textTransform: 'uppercase',
          }}>
            <div>Payment ID :</div>
            <div><b>{paymentId || 'N/A'}</b></div>
            <div>Registration Number :</div>
            <div><b>{regNumber || 'N/A'}</b></div>
            <div>Order ID :</div>
            <div><b>{orderId || 'N/A'}</b></div>
          </div>
          {/* Table Body */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            padding: '15px 20px',
            color: '#333',
            fontSize: '16px',
            backgroundColor: '#ffffff'
          }}>
            <div>Order ID : <b>{orderId || 'N/A'}</b></div>
            <div></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '15px',
          marginTop: '10px'
        }}>
          <button
            onClick={handleButtonClick}
            disabled={loading}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '12px 25px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'background-color 0.2s ease, transform 0.1s ease',
              opacity: loading ? 0.7 : 1,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = '#218838')}
            onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = '#28a745')}
            onMouseDown={(e) => !loading && (e.currentTarget.style.transform = 'translateY(1px)')}
            onMouseUp={(e) => !loading && (e.currentTarget.style.transform = 'translateY(0)')}
          >
            {loading ? 'Processing...' : 'Print Receipt'}
          </button>
          <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '12px 25px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'background-color 0.2s ease, transform 0.1s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5a6268')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6c757d')}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(1px)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Go Back to Home
          </button>
        </div>
      </div>

      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            color: 'white',
            fontSize: '1.8rem',
            fontWeight: 'bold'
          }}
        >
          Loading, please wait...
        </div>
      )}
    </div>
  );
};

export default ReceiptPage;