"use client";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { IoIosCopy, IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLinkedinFill, RiUserFill } from "react-icons/ri";
import FreePikImgRender from "../Common/FreePikImgRender";
import OpacityAnimation from "../Common/Animations/OpacityAnimation";
import SlideAnimation from "../Common/Animations/SlideAnimation";
import {
  GetUserContextValue,
  PROF_DETAIL_KEY,
} from "../Common/EditContextWrapper";
import EditComp from "../Common/EditComp";

const AboutBanner = () => {
  const values: any = GetUserContextValue();
  const renderCopyTableCell = (
    href: string,
    displayText: PROF_DETAIL_KEY,
    newTab?: boolean
  ) => {
    return (
      <TableCell>
        <div className="content-copy">
          <EditComp name={displayText}>
            <a href={href} target={newTab ? "_blank" : "_self"}>
              {values[displayText] as string}
            </a>
          </EditComp>
          <IoIosCopy
            title="Copy"
            fontSize={22}
            onClick={() => navigator.clipboard.writeText(displayText)}
          />
        </div>
      </TableCell>
    );
  };
  return (
    <>
      <Grid container className="secondary-bg" id="AboutWrapperId">
        <Grid
          item
          md={5}
          className="-ml-6 mr-3 flex items-center sm:w-full justify-center"
        >
          <OpacityAnimation>
            <FreePikImgRender
              src={"/QueBro.svg"}
              height={500}
              width={500}
              textLeft
            />
          </OpacityAnimation>
        </Grid>
        <Grid item md={7} className="xs:mt-8 md:mt-0 overflow-x-hidden">
          <SlideAnimation delay={0.3}>
            <Typography
              component={"h2"}
              fontWeight={600}
              className="c-theme-title"
            >
              <EditComp name="Role"> {values.Role}</EditComp> with{" "}
              <EditComp name="Experience"> {values.Experience} </EditComp>
              &nbsp;of experience.
            </Typography>
          </SlideAnimation>

          <br />
          <SlideAnimation delay={0.5}>
            <Typography component={"p"}>
              <EditComp name="ShortBio">{values.ShortBio}</EditComp>
            </Typography>
          </SlideAnimation>
          <OpacityAnimation delay={0.2}>
            <Table className="about-info-table mt-6">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <RiUserFill fontSize={26} className="mr-2" />
                    Full Name
                  </TableCell>
                  <TableCell>
                    <EditComp name="FullName">{values.FullName}</EditComp>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MdEmail fontSize={26} className="mr-2" /> Email
                  </TableCell>
                  {renderCopyTableCell(`mailto:${values.AllEmail}`, `AllEmail`)}
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IoMdCall fontSize={26} className="mr-2" /> Contact No
                  </TableCell>
                  {renderCopyTableCell(
                    `tel:${values.MobileNo}`,
                    "MobileNoForView"
                  )}
                </TableRow>
                <TableRow>
                  <TableCell>
                    <RiLinkedinFill fontSize={26} className="mr-2" /> Linked In
                  </TableCell>
                  {renderCopyTableCell(values.LinkedIn, "LinkedIn", true)}
                </TableRow>
              </TableBody>
            </Table>
          </OpacityAnimation>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutBanner;
