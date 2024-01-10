import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PartnerTag, Partners } from "./Partners";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="w-full p-6"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 724,
        width: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Dr. Ranti Babalola"
                position="Chairman"
                position2="Director. Admissions and Monitoring"
              />
            </div>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Pastor Seyi Famuyiwa"
                position="Pastoral covering and Senior special adviser"
              />
            </div>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Pastor Johnson Ajayi"
                position="Director Events (Nigeria)"
              />
            </div>
          }
          {...a11yProps(2)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Pastor Yomi and Ebun Oriretan"
                position=" Pro. Membership and Enquiry (America/Canada)"
              />
            </div>
          }
          {...a11yProps(3)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Pastor Leke Adebanjo"
                position="Pro. Membership and enquiry (Nigeria)"
              />
            </div>
          }
          {...a11yProps(4)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag name="Bukola Babalola" position="Director Accounts" />
            </div>
          }
          {...a11yProps(5)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag name="Deolu" position="Special Adviser (projects)" />
            </div>
          }
          {...a11yProps(6)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag name="Goke Yusuf" position="Director Prayer" />
            </div>
          }
          {...a11yProps(7)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Tayo Olabisi"
                position="Director Special Duty"
              />
            </div>
          }
          {...a11yProps(8)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Praise Famuyiwa"
                position="Pro. Membership and enquiry (Uk)"
              />
            </div>
          }
          {...a11yProps(9)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Dotun"
                position="Pro. letters and editorials."
              />
            </div>
          }
          {...a11yProps(10)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Biodun Bello"
                position="Director. Events (diaspora)"
              />
            </div>
          }
          {...a11yProps(11)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Odunayo Bagbile"
                position="Director. Events (Nigeria)"
              />
            </div>
          }
          {...a11yProps(12)}
        />
        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag
                name="Elizabeth Yusuf"
                position=" Director Records and Reports."
              />
            </div>
          }
          {...a11yProps(13)}
        />

        <Tab
          label={
            <div className="text-left w-full">
              <PartnerTag name="Godson Oladipupo" position="Pro. Website." />
            </div>
          }
          {...a11yProps(14)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Partners
          name="Dr. Ranti Babalola"
          image="pastorBabalola"
          position="Chairman"
          position2="Director Admissions and Monitoring"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Partners
          name="Pastor Seyi Famuyiwa"
          position="Pastoral covering and Senior special adviser"
          image="pastorSeyi"
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Partners
          name="Pastor Johnson"
          position="Director Events Nigeria"
          image="pastorJohnson"
        />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Partners
          name="Pastor Yomi and Ebun Oriretan"
          position="Pro. Membership and Enquiry (America/ Canada)"
          image="avatar"
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Partners
          name="Pastor Leke Adebanjo"
          position="Pro. Membership and Enquiry (Nigeria)"
          image="pastorLeke"
        />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Partners
          name="Bukola Babalola"
          position="Director Accounts"
          image="bukolaBabalola"
        />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Partners
          name="Pastor Deolu"
          position="Special Advisor (Projects)"
          image="pastorDeolu"
        />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Partners name="Goke Yusuf" position="Director Prayer" image="avatar" />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Partners
          name="Tayo Olabisi"
          position="Director Special Duty"
          image="avatar"
        />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Partners
          name="Praise Famuyiwa"
          position="Pro. Membership and Enquiry (UK)"
          image="avatar"
        />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Partners
          name="Dotun"
          position="Pro. Letters and Editorials"
          image="avatar"
        />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <Partners
          name="Biodun Bello"
          position="Director Events (Diaspora)"
          image="avatar"
        />
      </TabPanel>
      <TabPanel value={value} index={12}>
        <Partners
          name="Odunayo Bagbile"
          position="Director Events (Nigeria)"
          image="avatar"
        />
      </TabPanel>
      <TabPanel value={value} index={13}>
        <Partners
          name="Elizabeth Yusuf"
          position="Director Records and Reports"
          image="avatar"
        />
      </TabPanel>
      <TabPanel value={value} index={14}>
        <Partners
          name="Godson Oladipupo"
          position="Pro. Website"
          image="avatar"
        />
      </TabPanel>
    </Box>
  );
}
