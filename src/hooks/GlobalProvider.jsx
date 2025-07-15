/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";

export const AllContext = createContext();

const GlobalProvider = ({ children }) => {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const handleSetCategory = (selectedFilter) => {
    setCategory(selectedFilter);
  };

  const eventCategories = [
    { label: "All", value: "all" },
    { label: "Education", value: "education" },
    { label: "Technology", value: "technology" },
    { label: "Health", value: "health" },
    { label: "Finance", value: "finance" },
    { label: "Business", value: "business" },
    { label: "Islam", value: "Islam" },
    { label: "Christianity", value: "christianity" },
    { label: "Sports", value: "sports" },
    { label: "Arts", value: "arts" },
  ];

  const allEvents = [
    {
      id: "1",
      title: "Summer Music Festival 2024",
      description:
        "Join us for an unforgettable night of live music featuring top artists from around the world.",
      date: "2024-07-15",
      time: "18:00",
      venue: "Central Park Amphitheater",
      location: "New York, NY",
      category: "music",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop",
      price: 75,
      soldTickets: 3200,
      organizer: "MusicFest Productions",
      ticketInfo: [
        {
          type: "regular",
          price: 8500,
        },
        {
          type: "vip",
          price: 12000,
        },
      ],
    },
    {
      id: "2",
      title: "Tech Conference 2024",
      description:
        "Explore the latest in technology with industry leaders and innovators.",
      date: "2024-08-22",
      time: "09:00",
      venue: "Convention Center",
      location: "San Francisco, CA",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
      price: 299,
      soldTickets: 1200,
      organizer: "Tech Events Inc",
      ticketInfo: [
        {
          type: "regular",
          price: 2000,
        },
        {
          type: "vip",
          price: 7500,
        },
        {
          type: "v.vip",
          price: 15000,
        },
      ],
    },
    {
      id: "12f336ca-871a-4eb2-a8a0-46624929b08d",
      title: "Food & Wine Experience",
      description:
        "Taste exquisite cuisine paired with premium wines from renowned chefs.",
      date: "2024-09-10",
      time: "19:00",
      venue: "Grand Hotel Ballroom",
      location: "Chicago, IL",
      category: "health",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=400&fit=crop",
      price: 150,
      totalTickets: 300,
      soldTickets: 180,
      organizer: "Culinary Masters",
    },
  ];

  const [events, setEvents] = useState(allEvents);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    phoneNumber: "",
  });

  const initialTicket = {
    type: "",
    quantity: 1,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { ...state, quantity: Math.min(state.quantity + 1, 10) };
      case "dec":
        return {
          ...state,
          quantity: Math.max(1, state.quantity - 1), // prevent going below 1
        };
      case "set_type":
        return { ...state, type: action.payload };
      default:
        return state;
    }
  };

  const [ticket, dispatch] = useReducer(reducer, initialTicket);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };
  const values = {
    category,
    handleSetCategory,
    eventCategories,
    searchQuery,
    setSearchQuery,
    events,
    setEvents,
    formData,
    setFormData,
    ticket,
    dispatch,
    handleFormData,
  };
  return <AllContext.Provider value={values}>{children}</AllContext.Provider>;
};

export default GlobalProvider;
