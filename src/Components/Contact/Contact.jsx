import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: 'Ajay',
        email: 'ajayjofficial',
        Phone: '+91 6385119260',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('/api/contact', formData);
            setSuccess('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            setError('Failed to send message.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-container bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="p-3 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="p-3 border border-gray-300 rounded-md"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="p-3 border border-gray-300 rounded-md"
                    required
                />
                <button
                    type="submit"
                    className={`p-3 rounded-md text-white ${
                        loading ? 'bg-gray-500' : 'bg-primary'
                    } transition duration-200 hover:bg-primary/80`}
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            {success && <p className="mt-4 text-green-600">{success}</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
    );
};

export default Contact;