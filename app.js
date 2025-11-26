const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send(`
    
    
    
      
      
      DevOps Workshop App
      
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
        .container {
          text-align: center;
          padding: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        h1 { font-size: 3em; margin-bottom: 20px; }
        p { font-size: 1.2em; margin-bottom: 30px; }
        .badge {
          display: inline-block;
          padding: 10px 20px;
          margin: 10px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          font-weight: bold;
        }
        .info { margin-top: 30px; font-size: 0.9em; opacity: 0.8; }
      
    
    
      
        🚀 DevOps Workshop
        CI/CD Pipeline with Docker, Jenkins & Ansible
        
          ✓ Docker
          ✓ Jenkins
          ✓ Ansible
        
        
          Application running on Node.js ${process.version}
          Port: ${PORT}
          Environment: ${process.env.NODE_ENV || 'development'}
        
      
    
    
  `);
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'app-simple',
    version: '1.0.0',
    description: 'Simple web application for DevOps workshop',
    node_version: process.version
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✓ Access: http://localhost:${PORT}`);
});

// Export for testing
module.exports = { app, server };