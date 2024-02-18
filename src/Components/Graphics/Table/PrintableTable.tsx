import React, { Component } from "react";
import { Button, Box } from "@mui/material";
import { Print, Print as PrintIcon } from "@mui/icons-material"; // Importa el icono de impresión de Material-UI
import Table1 from "./Table1";

interface PrintableTableProps {
  data: any[]; // Tipo de datos de la tabla
  columns: any[]; // Tipo de columnas de la tabla
  title: string; // Tipo del título
  onPrint: () => void; // Tipo de la función onPrint
}

class PrintableTable extends Component<PrintableTableProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box alignItems="center">
        <Button
        
          variant="outlined"
          color="primary"
          startIcon={<PrintIcon />} // Agrega el icono de impresión
          onClick={this.props.onPrint}
        >
          Imprimir
        </Button>
        <Table1
          data={this.props.data}
          columns={this.props.columns}
          title={this.props.title}
        />
      </Box>
    );
  }
}

export default PrintableTable;
