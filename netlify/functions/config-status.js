const { Handler } = require('@netlify/functions');

const handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (apiKey) {
      const maskedKey = apiKey.substring(0, 4) + '...' + apiKey.substring(apiKey.length - 4);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          status: 'success', 
          hasApiKey: true, 
          maskedKey: maskedKey 
        })
      };
    } else {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          status: 'error', 
          hasApiKey: false, 
          message: 'API 키가 설정되지 않았습니다.' 
        })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        status: 'error', 
        hasApiKey: false, 
        message: error.message 
      })
    };
  }
};

module.exports = { handler };
