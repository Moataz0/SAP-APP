import { Card, CardHeader } from "@ui5/webcomponents-react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Icon } from "@ui5/webcomponents-react";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  const cards = [
    { title: "Items Page", href: "/items" },
    { title: "List", href: "/list" },
    { title: "List", href: "/another-list" },
    { title: "List", href: "/more-items" },
  ];

  return (
    <>
      <Header hideOverview={false} />
      <div style={{ padding: "2rem" }}>
        <h1>Overview</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {cards.map((card, index) => (
            <Card key={index} style={{ height: "200px" }}>
              <CardHeader
                style={{ width: "50px", height: "50px", color: "#000" }}
                titleText={card.title}
              />
              <div style={{ position: "absolute", bottom: 0, margin: 20 }}>
                <Icon
                  name="document"
                  style={{ width: "30px", height: "30px", color: "#000" }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
