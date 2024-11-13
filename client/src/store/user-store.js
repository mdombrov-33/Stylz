import { create } from "zustand";
import CryptoJS from "crypto-js";

const SECRET_KEY = "your-secret-key";

// Encrypt data
function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

// Decrypt data with error handling
function decryptData(encryptedData) {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedData) throw new Error("Decryption failed");
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error("Failed to decrypt data:", error);
    return { email: "", fullName: "" }; // Return default values if decryption fails
  }
}

// Check for encrypted user data in localStorage on app load
const storedUserData = localStorage.getItem("userData");
const initialUserData = storedUserData
  ? decryptData(storedUserData)
  : { email: "", fullName: "" };

// Zustand store
const useUserStore = create((set) => ({
  user: initialUserData,
  setUser: (email, fullName) => {
    const userData = { email, fullName };
    const encryptedData = encryptData(userData);
    localStorage.setItem("userData", encryptedData); // Store encrypted data
    set(() => ({ user: userData })); // Update Zustand store
  },
  clearUser: () => {
    localStorage.removeItem("userData"); // Clear data from localStorage
    set(() => ({ user: { email: "", fullName: "" } })); // Reset Zustand store
  },
}));

export default useUserStore;
