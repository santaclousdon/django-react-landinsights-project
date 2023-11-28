/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";

// html-react-parser components
import parse from "html-react-parser";
// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Kanban application components
import Header from "layouts/applications/kanban/components/Header";

// Data
import boards from "layouts/applications/kanban/data";

function Kanban() {
  const [newCardForm, setNewCardForm] = useState(false);
  const [formValue, setFormValue] = useState("");

  const openNewCardForm = (event, id) => setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = ({ currentTarget }) => setFormValue(currentTarget.value);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox display="flex" justifyContent="flex-end" m={2}>
          <Header />
        </SoftBox>
        <SoftBox
          position="relative"
          my={4}
          sx={({ palette: { light }, functions: { pxToRem }, borders: { borderRadius } }) => ({
            "& .react-kanban-column": {
              backgroundColor: light.main,
              width: pxToRem(450),
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
            },
          })}
        >
          <Board
            initialBoard={boards}
            allowAddCard
            allowAddColumn
            renderColumnHeader={({ id, title }, { addCard }) => (
              <>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <SoftTypography variant="h6">{title}</SoftTypography>
                  <SoftButton size="small" onClick={(event) => openNewCardForm(event, id)}>
                    <Icon sx={{ fontWeight: "bold", color: ({ palette: { dark } }) => dark.main }}>
                      add
                    </Icon>
                  </SoftButton>
                </SoftBox>
                {newCardForm === id ? (
                  <SoftBox my={2.5}>
                    <SoftInput
                      value={formValue}
                      inputProps={{ rows: 2 }}
                      onChange={handeSetFormValue}
                      multiline
                    />
                    <SoftBox display="flex" mt={2}>
                      <SoftButton
                        variant="gradient"
                        color="success"
                        size="small"
                        onClick={() => {
                          addCard({ id: uuidv4(), template: formValue });
                          setFormValue("");
                        }}
                      >
                        add
                      </SoftButton>
                      <SoftBox ml={1}>
                        <SoftButton
                          variant="gradient"
                          color="light"
                          size="small"
                          onClick={closeNewCardForm}
                        >
                          cancel
                        </SoftButton>
                      </SoftBox>
                    </SoftBox>
                  </SoftBox>
                ) : null}
              </>
            )}
            renderCard={({ id, template }, { dragging }) => (
              <SoftBox
                key={id}
                dragging={dragging.toString() || undefined}
                display="block"
                width="calc(450px - 40px)"
                bgColor="white"
                color="text"
                borderRadius="md"
                mt={2.5}
                py={1.875}
                px={1.875}
                lineHeight={1.5}
                sx={{
                  fontSize: ({ typography: { size } }) => size.md,
                }}
              >
                {typeof template === "string" ? parse(template) : template}
              </SoftBox>
            )}
            onCardNew={() => null}
          />
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;
