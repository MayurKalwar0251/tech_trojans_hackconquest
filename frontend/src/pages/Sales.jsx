import React, { useEffect } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import "./Sales.css";

const Sales = () => {
  return (
    <>
      <PowerBIEmbed
        embedConfig={{
          type: "report",
          id: "8768ea12-70c9-4a4a-b89d-e84093f3ad80",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=8768ea12-70c9-4a4a-b89d-e84093f3ad80&groupId=33692ff8-75be-4b5f-93a5-29c111ab88ab&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1DLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyIsImtpZCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZDFmMTQzNDgtZjFiNS00YTA5LWFjOTktN2ViZjIxM2NiYzgxLyIsImlhdCI6MTcyODA3Mjk3OCwibmJmIjoxNzI4MDcyOTc4LCJleHAiOjE3MjgwNzczMjEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WUFBQUFvZVJBYWlERXJIc1FqNytFQmtNRVFZdG55NGtTYlhBQXJVd3YrVkc0MlIyY1VFQVlEUStlTmFFVzBwY2VYRlVMIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjIzZDhmNmJkLTFlYjAtNGNjMi1hMDhjLTdiZjUyNWM2N2JjZCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiSkFJTiIsImdpdmVuX25hbWUiOiJLVVNIIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTM5LjUuNDQuMTk2IiwibmFtZSI6IktVU0ggSkFJTiAtIDYwMDA0MjIwMjMwIiwib2lkIjoiNjdmMDcwNDEtOTdkOC00NGJjLTk2NmQtZDEwYmNkZWI3M2Q4IiwicHVpZCI6IjEwMDMyMDAyNzI2RUUyMTYiLCJyaCI6IjAuQVQwQVNFUHgwYlh4Q1Vxc21YNl9JVHk4Z1FrQUFBQUFBQUFBd0FBQUFBQUFBQUE5QUpjLiIsInNjcCI6IkFwcC5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkV3JpdGUuQWxsIENvbnRlbnQuQ3JlYXRlIERhc2hib2FyZC5SZWFkLkFsbCBEYXNoYm9hcmQuUmVhZFdyaXRlLkFsbCBEYXRhZmxvdy5SZWFkLkFsbCBEYXRhZmxvdy5SZWFkV3JpdGUuQWxsIERhdGFzZXQuUmVhZC5BbGwgRGF0YXNldC5SZWFkV3JpdGUuQWxsIEdhdGV3YXkuUmVhZC5BbGwgR2F0ZXdheS5SZWFkV3JpdGUuQWxsIFBpcGVsaW5lLkRlcGxveSBQaXBlbGluZS5SZWFkLkFsbCBQaXBlbGluZS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkLkFsbCBSZXBvcnQuUmVhZFdyaXRlLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkV3JpdGUuQWxsIFRlbmFudC5SZWFkLkFsbCBUZW5hbnQuUmVhZFdyaXRlLkFsbCBVc2VyU3RhdGUuUmVhZFdyaXRlLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWRXcml0ZS5BbGwiLCJzdWIiOiJEZTZmYTlWaENWSEplV3lBWHg0dGk5Z1I1cHlCOWRMWDktTEhhZi1fWENJIiwidGlkIjoiZDFmMTQzNDgtZjFiNS00YTA5LWFjOTktN2ViZjIxM2NiYzgxIiwidW5pcXVlX25hbWUiOiJLVVNILkpBSU4yMzBAc3ZrbW11bWJhaS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJLVVNILkpBSU4yMzBAc3ZrbW11bWJhaS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJPanZISG9zZnVVeW01T0ZucHNNVkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2lkcmVsIjoiMSA4In0.SwUYA2tsjHF1lWOiWFclEMtZ60CGUtjtysCYLebeb3-9z4RS9q9z4gJ7jUmtSk-Ts38p_hUt3wqd8--ThjlPcxUIMMghD_YHSJaBC9PdbxsW2PBIwE0E6h1PKgC-2FreNniGjZyWEZRoomgbuVUswcSx3gcRbTHx8VnzSpQpIUnmLJs2JBzVXH7YhAarC_C41AFreCUed-C9EuLzVOxEpvtIT6H8YrI1ikpxUXOleHdZTm-BY6ojerEt65Q5HkyT8SYUb6TFBtU30Qvn7Y3zJuK2QhTLjPnw8ESKznuSpF0Cra2EUm7s9FEWfoTDtiOnTYrSknzOEdG7KzJpcoE77Q",
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
            ["visualClicked", () => console.log("visual clicked")],
            ["pageChanged", (event) => console.log(event)],
          ])
        }
        cssClassName={"Embed-container"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </>
  );
};

export default Sales;
