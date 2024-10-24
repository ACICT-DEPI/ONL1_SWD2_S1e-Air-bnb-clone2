import { useState } from "react";

const StoreFinder = () => {
    const [activeView, setActiveView] = useState("map");
    const [selectedBranch, setSelectedBranch] = useState(null);

    const branches = [
        {
            name: "كايور فستيفال سيتي",
            hours: "9 AM - 10 PM",
            directions: "https://maps.app.goo.gl/rAwf2x9WfkKXcQdj6",
        },
        {
            name: "مول مصر",
            hours: "10 AM - 11 PM",
            directions: "https://maps.app.goo.gl/Q5cCD7c1D6MsouZ8A",
        },
        {
            name: "ستي ستار القاهرة",
            hours: "10 AM - 10 PM",
            directions: "https://maps.app.goo.gl/LM2aEGL6Mcc2xJML7",
        },
        {
            name: "جاردن سيتي القاهرة الجديدة",
            hours: "9 AM - 9 PM",
            directions: "https://maps.app.goo.gl/6wxTTLCbwwd5Y8518",
        },
        {
            name: "كابيتال مول",
            hours: "11 AM - 10 PM",
            directions: "https://maps.app.goo.gl/rAwf2x9WfkKXcQdj6",
        },
    ];

    const showView = (view) => {
        setActiveView(view);
        setSelectedBranch(null);
    };

    return (
        <div
            style={{
                textAlign: "center",
                direction: "rtl",
                lineHeight: "1.6",
                color: "#333",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "30px 0",
                }}
            >
                <button
                    style={{
                        padding: "12px 25px",
                        margin: "0 10px",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor:
                            activeView === "map" ? "#e50010" : "#f4f4f4",
                        color: activeView === "map" ? "white" : "#333",
                        fontSize: "16px",
                        borderRadius: "25px",
                        transition: "all 0.3s ease",
                        transform:
                            activeView === "map" ? "scale(1.05)" : "none",
                    }}
                    onClick={() => showView("map")}
                >
                    عرض الخريطة
                </button>
                <button
                    style={{
                        padding: "12px 25px",
                        margin: "0 10px",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor:
                            activeView === "list" ? "#e50010" : "#f4f4f4",
                        color: activeView === "list" ? "white" : "#333",
                        fontSize: "16px",
                        borderRadius: "25px",
                        transition: "all 0.3s ease",
                        transform:
                            activeView === "list" ? "scale(1.05)" : "none",
                    }}
                    onClick={() => showView("list")}
                >
                    عرض القائمة
                </button>
            </div>

            {activeView === "map" && (
                <div
                    style={{
                        height: "450px",
                        width: "90%",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d212689.71931842336!2d31.30926603253393!3d30.012701138025783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zSCZN!5e1!3m2!1sar!2seg!4v1729746913823!5m2!1sar!2seg"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            )}

            {activeView === "list" && (
                <div
                    style={{
                        width: "90%",
                        maxWidth: "800px",
                        margin: "0 auto",
                        textAlign: "right",
                    }}
                >
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {branches.map((branch, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedBranch(branch)}
                                style={{
                                    padding: "15px",
                                    borderBottom: "1px solid #ddd",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s ease",
                                }}
                                onMouseOver={(e) =>
                                    (e.target.style.backgroundColor = "#f4f4f4")
                                }
                                onMouseOut={(e) =>
                                    (e.target.style.backgroundColor =
                                        "transparent")
                                }
                            >
                                {branch.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {selectedBranch && (
                <div
                    style={{
                        width: "90%",
                        maxWidth: "1200px",
                        margin: "20px auto",
                        padding: "20px",
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        textAlign: "right",
                        borderRadius: "10px",
                        borderLeft: "4px solid #e50010",
                        animation: "fadeIn 0.3s ease",
                    }}
                >
                    <h3
                        style={{
                            fontSize: "1.5rem",
                            color: "#e50010",
                            marginBottom: "10px",
                        }}
                    >
                        {selectedBranch.name}
                    </h3>
                    <p
                        style={{
                            fontSize: "1.2rem",
                            color: "#333",
                            marginBottom: "10px",
                        }}
                    >
                        Working Hours: {selectedBranch.hours}
                    </p>
                    <a
                        href={selectedBranch.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: "1.2rem",
                            color: "#e50010",
                            textDecoration: "none",
                            borderBottom: "1px solid #e50010",
                            transition:
                                "color 0.3s ease, border-color 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                            e.target.style.color = "#f4f4f4";
                            e.target.style.backgroundColor = "#e50010";
                            e.target.style.borderColor = "#f4f4f4";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.color = "#e50010";
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderColor = "#e50010";
                        }}
                    >
                        Show directions
                    </a>
                </div>
            )}
        </div>
    );
};
export default StoreFinder;
