# Streamify 🌍💬  
**Global Language Exchange with Real-Time Communication**  

[Live Demo](https://streamify-2zxt.onrender.com/) | [GitHub](https://github.com/ryanhui30/streamify)  

## ✨ Key Features  
- **🧠 Real-Time Language Exchange**  
  Chat and call instantly with users worldwide  
- **📞 Voice Calling**  
  High-quality, low-latency peer-to-peer voice communication  
- **🌐 Scalable Architecture**  
  Built to scale for millions of simultaneous users  
- **🎨 Custom Profiles & Themes**  
  Personalized avatars, display names, and UI preferences  
- **🔒 Secure Auth System**  
  Login, signup, and session management with full auth flow  
- **👥 Social Connectivity**  
  Friend request system with instant notifications  

## 🛠️ Tech Stack  

### Core Platform  
| Technology       | Use Case                     |
|------------------|------------------------------|
| MongoDB          | NoSQL Database               |
| Express.js       | Backend Framework            |
| React            | Frontend UI                  |
| Node.js          | Server Runtime               |
| Render           | Cloud Hosting Platform       |

### Real-Time Features  
| Component        | Technology                   |
|------------------|------------------------------|
| Chat & Calling   | Stream API                   |
| Data Fetching    | TanStack Query               |
| Notifications    | WebSockets                   |

## 🚀 Getting Started  

### Prerequisites  
- Node.js v18+  
- MongoDB URI  
- Stream API Credentials  

### **Development Setup**  
1. **Clone the repo**:  
  ```bash
  git clone https://github.com/yourusername/streamify.git
  cd streamify
  ```

2. **Install dependencies**:  
  ```bash
  npm install
  ```

3. **Configure environment variables**:  
- Create a `.env.local` file and add:
  ```bash
  # MongoDB
  MONGO_URI=your_mongodb_uri_here

  # Stream API
  STREAM_API_KEY=your_key_here
  STREAM_API_SECRET=your_secret_here
  STREAM_APP_ID=your_app_id_here

  # Other Auth Configs
  JWT_SECRET=your_jwt_secret
  ```

4. **Start Development Server**:  
  ```bash
  npm run dev
  ```

## 📬 Need Help?
Feel free to reach out: **ryanhui30@gmail.com**
