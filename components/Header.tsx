import {
  Avatar,
  Icon,
  Input,
  ListItemStandard,
  ShellBar,
  ShellBarItem,
} from "@ui5/webcomponents-react";
import { useRouter } from "next/router";

interface HeaderProps {
  hideOverview: boolean; 
}

const Header: React.FC<HeaderProps>= ({hideOverview }) => {
  const router = useRouter();

  console.log("SEARCH" ,)
  const handleMenuItemClick = (event: any) => {
    const dataKey = event.detail.item.dataset.key;

    if (dataKey === "1") {
      router.push("/items");
    }
  };

  return <>
    <ShellBar
      style={{ height: "120px" ,borderBottom: !hideOverview ? "none" : "1px solid #d9d9d9"}}
      logo={
        <img
          alt="SAP Logo"
          src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"
        />
      }
      menuItems={
        <>
          <ListItemStandard data-key="1">Items</ListItemStandard>
        </>
      }
      onLogoClick={function ks() {}}
      onNotificationsClick={function ks() {}}
      onProductSwitchClick={function ks() {}}
      onProfileClick={function ks() {}}
      onMenuItemClick={handleMenuItemClick}
      onSearchButtonClick={function ks() {}}
      primaryTitle="Home"
      profile={
        <Avatar>
          <img src="https://sap.github.io/ui5-webcomponents-react/v2/assets/Person-B7wHqdJw.png" />
        </Avatar>
      }
      searchField={<Input icon={<Icon name="search" />} showClearIcon />}
      showNotifications
    >
      <ShellBarItem icon="add" text="ShellBarItem" />
    </ShellBar>
    <div
      style={{
        padding: "0 16px",
        background: "#FFF",
        paddingLeft: "55px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "0",
          right: "200px",
        }}
      >
        <img
          src="/logo.jpg"
          alt="Custom Logo"
          style={{ height: "60px", width:"80px", marginLeft: "8px", cursor: "pointer" }}
        />
      </div>
      {!hideOverview && (
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: "1.2rem", marginRight: "10px" }}>
          Overview
        </span>
        <Icon name="slim-arrow-down" />
      </div>
 )}
    </div>
  </>
};

export default Header;
