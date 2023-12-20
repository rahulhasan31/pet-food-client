import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../../context/AuthProviders";
import Swal from "sweetalert2";
import { BallTriangle } from "react-loader-spinner";

const Socket = () => {
  const chatContainerRef = useRef(null);
  const { user, loading } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const socket = io("https://server-beta-liart.vercel.app");

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  }, []);

  useEffect(() => {
    socket.on("received-message", (message) => {
      setMessages([...messages, message]);
    });
    console.log(messages);
  }, [setMessages, messages, newMessage, socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageData = {
      message: newMessage,
      user: user.email,
      time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
    };

    if (newMessage !== "") {
      socket.emit("send-message", messageData);
    } else {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Message cannot be empty",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    setNewMessage('');
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      {loading ? (
        <BallTriangle height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" />
      ) : (
        <>
          {user?.uid ? (
            <div className="">
              <h1 className="text-center text-white font-semibold text-2xl mb-4 bg-green-500 py-2 rounded-md">
                Shop Room Chat
              </h1>

              <div>
                <div className="overflow-y-scroll h-[55vh]" ref={chatContainerRef}>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`${user.email === message.user ? "chat chat-end me-5" : "chat chat-start"} `}
                    >
                      {/* ... rest of your code ... */}
                    </div>
                  ))}
                </div>
                <form className="flex gap-2" onSubmit={handleSubmit}>
                  <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent lg:w-96 md:w-full "
                  />
                  <button type="submit" className="px-5 py-2 gap-2 bg-green-500 rounded-md text-white">
                    Send
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-2xl font-bold bg-green-600 px-14 py-9 text-white rounded-md">
              Please Login First <Link to={'/login'} className="text-red-700">Click Here</Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Socket;
