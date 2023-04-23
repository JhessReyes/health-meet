import { Button, Input } from "antd";
import React from "react";
import { Module, SchedulModal } from "../../components/organism";
import { FormSchedule, TableSchedule } from "./_components";

function Schedule() {
  return (
    <>
      <Module title="Horarios">
        <div className="flex justify-end p-2">
          <SchedulModal />
        </div>
        <TableSchedule></TableSchedule>
      </Module>
    </>
  );
}

export default Schedule;
