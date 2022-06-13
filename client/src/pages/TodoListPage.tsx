import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React  from "react";

export const TodoListPage: React.FC = () => {
  const nav = useNavigate();
 
  return (
    <div>
      <Typography variant="h4">List of todos</Typography>

        <Button
          variant="contained"
          disableElevation
          fullWidth
          onClick={() => nav("/add", { replace: true })}
          style={{ marginTop: "3rem", width: "100%" }}
        >
          Add todo +
        </Button>
    </div>
  );
};