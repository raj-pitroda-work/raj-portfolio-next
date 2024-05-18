import { PROFILE_DETAIL } from "@/utils/Constant";
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

const AboutBanner = () => {
  const renderCopyTableCell = (
    href: string,
    displayText: string,
    newTab?: boolean
  ) => {
    return (
      <TableCell>
        <div className="content-copy">
          <a href={href} target={newTab ? "_blank" : "_self"}>
            {displayText}
          </a>
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
              {PROFILE_DETAIL.Role} with {PROFILE_DETAIL.Experience} of
              experience.
            </Typography>
          </SlideAnimation>

          <br />
          <SlideAnimation delay={0.5}>
            <Typography component={"p"}>{PROFILE_DETAIL.ShortBio}</Typography>
          </SlideAnimation>
          <OpacityAnimation delay={0.2}>
            <Table className="about-info-table mt-6">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <RiUserFill fontSize={26} className="mr-2" />
                    Full Name
                  </TableCell>
                  <TableCell>{PROFILE_DETAIL.FullName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MdEmail fontSize={26} className="mr-2" /> Email
                  </TableCell>
                  {renderCopyTableCell(
                    `mailto:${PROFILE_DETAIL.Email1};${PROFILE_DETAIL.Email2}`,
                    `${PROFILE_DETAIL.Email1}; ${PROFILE_DETAIL.Email2}`
                  )}
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IoMdCall fontSize={26} className="mr-2" /> Contact No
                  </TableCell>
                  {renderCopyTableCell(
                    `tel:${PROFILE_DETAIL.MobileNo}`,
                    PROFILE_DETAIL.MobileNoForView
                  )}
                </TableRow>
                <TableRow>
                  <TableCell>
                    <RiLinkedinFill fontSize={26} className="mr-2" /> Linked In
                  </TableCell>
                  {renderCopyTableCell(
                    PROFILE_DETAIL.LinkedIn,
                    PROFILE_DETAIL.LinkedIn,
                    true
                  )}
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
