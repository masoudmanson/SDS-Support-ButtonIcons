import React from "react";
import {
  ButtonIcon,
  CellBasic,
  CellComponent,
  CellHeader,
  Table,
  TableHeader,
  TableRow,
  Tag
} from "czifui";
import "./styles.css";

import { dependencies } from "../package.json";

function App() {
  return (
    <div className="app">
      <p className="description">
        Since{" "}
        <Tag
          hover={false}
          label="infoSpeechBubble"
          color="gray"
          sdsType="secondary"
        />{" "}
        and{" "}
        <Tag
          hover={false}
          label="slidersHorizontal"
          color="gray"
          sdsType="secondary"
        />{" "}
        icons do not have a small size, it is not possible to create a
        ButtonIcon using these icons in a small size.
      </p>
      <Table>
        <TableHeader>
          <CellHeader hideSortIcon>Type</CellHeader>
          <CellHeader hideSortIcon>Large</CellHeader>
          <CellHeader hideSortIcon>Medium</CellHeader>
          <CellHeader hideSortIcon>Small</CellHeader>
        </TableHeader>
        <tbody>
          <TableRow hover={false}>
            <CellBasic
              shouldShowTooltipOnHover={false}
              verticalAlign="center"
              primaryText="Primary"
            />
            <CellComponent verticalAlign="center">
              <ButtonIcon
                sdsIcon="infoSpeechBubble"
                sdsSize="large"
                sdsType="primary"
              />
            </CellComponent>
            <CellComponent verticalAlign="center">
              <ButtonIcon
                sdsIcon="infoSpeechBubble"
                sdsSize="medium"
                sdsType="primary"
              />
            </CellComponent>
            <CellComponent verticalAlign="center">
              <Tag
                label="Not Available"
                hover={false}
                color="error"
                sdsType="secondary"
              />
            </CellComponent>
          </TableRow>

          <TableRow hover={false}>
            <CellBasic
              shouldShowTooltipOnHover={false}
              verticalAlign="center"
              primaryText="Secondary"
            />
            <CellComponent verticalAlign="center">
              <ButtonIcon
                sdsIcon="slidersHorizontal"
                sdsSize="large"
                sdsType="secondary"
              />
            </CellComponent>
            <CellComponent verticalAlign="center">
              <ButtonIcon
                sdsIcon="slidersHorizontal"
                sdsSize="medium"
                sdsType="secondary"
              />
            </CellComponent>
            <CellComponent verticalAlign="center">
              <Tag
                label="Not Available"
                hover={false}
                color="error"
                sdsType="secondary"
              />
            </CellComponent>
          </TableRow>

          <TableRow hover={false}>
            <CellBasic
              shouldShowTooltipOnHover={false}
              verticalAlign="center"
              primaryText="Tertiary"
            />
            <CellComponent verticalAlign="center">
              <ButtonIcon sdsIcon="copy" sdsSize="large" sdsType="tertiary" />
            </CellComponent>
            <CellComponent verticalAlign="center">
              <ButtonIcon sdsIcon="copy" sdsSize="medium" sdsType="tertiary" />
            </CellComponent>
            <CellComponent verticalAlign="center">
              <ButtonIcon sdsIcon="copy" sdsSize="small" sdsType="tertiary" />
            </CellComponent>
          </TableRow>
        </tbody>
      </Table>
      <p className="version">czifui version: {dependencies.czifui}</p>
    </div>
  );
}

export default App;
