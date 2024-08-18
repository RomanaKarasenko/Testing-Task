import React from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const CamperTabs = ({ item, onTabChange }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const tab = newValue === 1 ? "reviews" : "features";
    onTabChange(tab);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="camper tabs"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab
          label="Features"
          sx={{
            borderBottom: value === 0 ? "2px solid #e44848" : "none",
            color: value === 0 ? "#007bff" : "inherit",
          }}
        />
        <Tab
          label="Reviews"
          sx={{
            borderBottom: value === 1 ? "2px solid #e44848" : "none",
            color: value === 1 ? "#007bff" : "inherit",
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Features item={item} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Reviews item={item} />
      </TabPanel>
    </Box>
  );
};

export default CamperTabs;
