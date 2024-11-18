import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css"; // استيراد أنماط React Quill
import { FiEdit3 } from "react-icons/fi";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import "react-tabs/style/react-tabs.css";
import { getAuth } from "firebase/auth";

const Notes = () => {
  const db = getFirestore();
  const auth = getAuth();

  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [noteContent, setNoteContent] = useState("");
  const [newTabName, setNewTabName] = useState("");
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  const user = auth.currentUser; // Get the current authenticated user
  const userId = user ? user.uid : null; // Use the user's UID as a unique identifier

  // Fetch user notes when the component mounts
  useEffect(() => {
    if (userId) {
      const fetchNotes = async () => {
        const userNotesRef = doc(db, "notes", userId);
        const docSnap = await getDoc(userNotesRef);

        if (docSnap.exists()) {
          const userNotes = docSnap.data();
          const fetchedTabs = userNotes.tabs || [];
          // Check if there are no tabs, then add a default tab
          if (fetchedTabs.length === 0) {
            const defaultTab = { id: 1, name: "Tab 1", content: "" };
            fetchedTabs.push(defaultTab);
            await updateUserNotes({
              tabs: fetchedTabs,
              activeTab: 1,
              noteContent: "",
            }); // Save default tab to Firestore
          }
          setTabs(fetchedTabs);
          setActiveTab(userNotes.activeTab || 1); // Set the first tab as active if no activeTab is set
          setNoteContent(userNotes.noteContent || ""); // Set default content if available
        } else {
          // Initialize a new notes structure with a default tab
          const defaultTab = { id: 1, name: "Tab 1", content: "" };
          await setDoc(userNotesRef, {
            tabs: [defaultTab],
            activeTab: 1,
            noteContent: "",
          });
          setTabs([defaultTab]);
          setActiveTab(1);
        }
      };
      fetchNotes();
    }
  }, [userId]);

  // Toggle notes window visibility
  const toggleNotes = () => {
    setIsNoteOpen(!isNoteOpen);
  };

  // Handle tab click
  const handleTabClick = (id) => {
    setActiveTab(id);
    const activeTabData = tabs.find((tab) => tab.id === id);
    setNoteContent(activeTabData?.content || "");
  };

  // Handle note content change
  const handleNoteChange = (content) => {
    setNoteContent(content);
    if (activeTab !== null) {
      const updatedTabs = tabs.map((tab) =>
        tab.id === activeTab ? { ...tab, content } : tab
      );
      setTabs(updatedTabs);
      updateUserNotes({ tabs: updatedTabs, activeTab, noteContent: content });
    }
  };

  // Add a new tab
  const addNewTab = async () => {
    if (newTabName.trim() === "") {
      alert("Please provide a name for the new tab.");
      return;
    }
    const newTabId = tabs.length + 1;
    const newTab = { id: newTabId, name: newTabName, content: "" };

    const updatedTabs = [...tabs, newTab];
    setTabs(updatedTabs);
    setActiveTab(newTabId);
    setNewTabName("");

    // Save the new tab to Firestore
    updateUserNotes({ tabs: updatedTabs, activeTab: newTabId, noteContent });
  };

  // Update user notes in Firestore
  const updateUserNotes = async (data) => {
    if (userId) {
      const userNotesRef = doc(db, "notes", userId);
      await updateDoc(userNotesRef, data);
    }
  };

  // Handle delete tab
  const handleDeleteTab = async (tabId) => {
    // حذف التبويب من الحالة
    const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(updatedTabs);

    // إذا كان التبويب المحذوف هو التبويب النشط، يتم تحديد تبويب آخر
    if (activeTab === tabId) {
      const newActiveTab = updatedTabs.length > 0 ? updatedTabs[0].id : null;
      setActiveTab(newActiveTab);
      setNoteContent(newActiveTab ? updatedTabs[0].content : ""); // إذا تم تحديد تبويب جديد
    }

    // تحديث Firestore لحذف التبويب
    await updateUserNotes({ tabs: updatedTabs, activeTab, noteContent });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* أيقونة فتح الملاحظات */}
      <button
        onClick={toggleNotes}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FiEdit3 />
      </button>

      {/* نافذة الملاحظات */}
      {isNoteOpen && (
        <div
          className="notes-window"
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "90%",
            maxWidth: "400px",
            backgroundColor: "#ffffff",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            padding: "20px",
            zIndex: 1000,
            border: "1px solid #000",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          {/* الهيدر مع التبويبات */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                overflowX: "auto", // التمرير الأفقي
                gap: "5px",
                flexWrap: "nowrap", // منع التفاف التبويبات في حالة وجود عدد كبير منها
              }}
            >
              {tabs.map((tab) => (
                <div key={tab.id} style={{ position: "relative" }}>
                  <button
                    onClick={() => handleTabClick(tab.id)}
                    style={{
                      background: tab.id === activeTab ? "#0077b6" : "#f4d35e",
                      color: "#000",
                      padding: "5px 15px",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "14px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tab.name}
                  </button>
                  {/* زر الحذف بجانب التبويب */}
                  <button
                    onClick={() => handleDeleteTab(tab.id)}
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-5px",
                      backgroundColor: "#f44336",
                      color: "#fff",
                      borderRadius: "100%",
                      width: "20px",
                      height: "20px",
                      fontSize: "12px",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
              
            </div>
            
          </div>

          {/* حقل النص */}
          <textarea
            style={{
              width: "100%",
              height: "150px",
              maxHeight: "200px",
              overflowY: "auto",
              border: ".5px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "16px",
              color: "#000",
              backgroundColor: "#f1f9ff",
              resize: "none",
            }}
            placeholder="Write your notes here..."
            value={noteContent}
            onChange={(e) => handleNoteChange(e.target.value)} // تحديث المحتوى أثناء الكتابة
          />

          {/* إضافة تسمية للتبويب الجديد */}
          <div
            style={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            <input
              type="text"
              value={newTabName}
              onChange={(e) => setNewTabName(e.target.value)}
              placeholder="Enter tab name"
              style={{
                padding: "5px 10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "14px",
                marginRight: "10px",
                width: "60%",
              }}
            />
            <button
              onClick={addNewTab}
              style={{
                background: "#28a745",
                color: "#fff",
                padding: "5px 10px",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Add Tab
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <button
              onClick={() => setIsNoteOpen(false)}
              style={{
                background: "#f4d35e",
                color: "#000",
                padding: "10px 15px",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#e3c34c")}
              onMouseOut={(e) => (e.target.style.background = "#f4d35e")}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
