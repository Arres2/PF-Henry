import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
  randomId,
} from '@mui/x-data-grid-generator';

const initialRows = [
  {
    id: 1,
    name: "Grecia imprescindible 6 días desde Atenas",
    description: "Viaje a Grecia para conocer de la mano de expertos guías en español lo mejor de la mítica Hellas",
    main_image: "https://pfhenry/main.jpg",
    price: 1000,
    start_date: "2022-08-15",
    end_date: "2022-08-21",
    seasson: "Verano",
    type: "Pack Short",
    featured: true,
    available: true,
    on_sale: 15,
    destinations: ["Grecia"],
  },
  {
    id: 2,
    name: "Joyas de Transilvania 8 días desde Bucarest",
    description: "Viaje a Europa del Este para visitar Rumanía, un país mágico, que combina su pasado histórico con",         main_image: "https://pfhenry/main.jpg",
    price: 1000,
    start_date: "2022-08-15",
    end_date: "2022-08-23",
    seasson: "Verano",
    type: "Pack Large",
    featured: false,
    available: true,
    on_sale: 10,
    destinations: ["Rumania"],
  },
  {
    id: 3,
    name: "Grecia Peninsular 7 días desde Atenas",
    description: "Viaje de 7 días por la región continental de Grecia con guías en español. Salimos hacia la región",
    main_image: "https://pfhenry/main.jpg",
    price: 1000,
    start_date: "2022-08-15",
    end_date: "2022-08-22",
    seasson: "Verano",
    type: "Pack Large",
    featured: false,
    available: true,
    on_sale: 10,
    destinations: ["Grecia"],
  },
  {
    id: 4,
    name: "Joyas de Rusia Imperial en tren 8 días de Moscú a San Petersburgo",
    description: "Viaje a Europa del Este para visitar lo mejor de Rusia Imperial: Moscú, la capital de Rusia, para",
    main_image: "https://pfhenry/main.jpg",
    price: 1010,
    start_date: "2022-08-15",
    end_date: "2022-08-23",
    seasson: "Verano",
    type: "Pack Large",
    featured: false,
    available: true,
    on_sale: 10,
    destinations: ["Rusia"],
  },
  {
    id: 5,
    name: "Joyas de Rusia Imperial en tren 8 días de San Petersburgo a Moscú",
    description: "Viaje a Europa del Este para visitar lo mejor de Rusia Imperial: San Petersburgo, considerada una",
    main_image: "https://pfhenry/main.jpg",
    price: 1010,
    start_date: "2022-09-20",
    end_date: "2022-09-28",
    seasson: "Otoño",
    type: "Pack Large",
    featured: false,
    available: true,
    on_sale: 10,
    destinations: ["Rusia"],
  },
  {
    id: 6,
    name: "Joyas del Mediterráneo – Grecia e Italia 8 días desde Atenas",
    description: "Viaje desde Atenas a Roma con guías en español. Comenzamos el paquete con la visita de Atenas y el",
    main_image: "https://pfhenry/main.jpg",
    price: 1015,
    start_date: "2022-09-20",
    end_date: "2022-09-28",
    seasson: "Otoño",
    type: "Multidestino",
    featured: true,
    available: true,
    on_sale: 10,
    destinations: ["Italia", "Grecia"],
  },
  {
    id: 7,
    name: "Viaje a Italia 9 días desde Milan",
    description: "Gran tour de 9 días con salidas desde Milán para descubrir las Joyas de Italia. En este tour Milán",
    main_image: "https://pfhenry/main.jpg",
    price: 1015,
    start_date: "2022-09-15",
    end_date: "2022-09-24",
    seasson: "Otoño",
    type: "Pack Large",
    featured: false,
    available: true,
    on_sale: 10,
    destinations: ["Italia"],
  },
  {
    id: 8,
    name: "Norte de Italia al completo 8 días desde Milán",
    description: "Impresionante recorrido por la Italia septentrional que nos ofrece una mezcla perfecta de arte",
    main_image: "https://pfhenry/main.jpg",
    price: 1015,
    start_date: "2022-10-05",
    end_date: "2022-10-13",
    seasson: "Otoño",
    type: "Pack Large",
    featured: false,
    available: true,
    on_sale: 10,
    destinations: ["Italia"],
  },
   {
    id: 9,
    name: "Nueva York y Oeste Clásico",
    description: "A la estancia en Nueva York, la gran ciudad que se reinventa cada día, se une un recorrido clásico",
    main_image: "https://pfhenry/main.jpg",
    price: 2705,
    start_date: "2022-08-27",
    end_date: "2022-09-03",
    seasson: "Verano",
    type: "Pack Large",
    featured: true,
    available: true,
    on_sale: 0,
    destinations: ["EEUU"],
  },
  {
    id: 10,
    name: "Desiertos, Lagos y Glaciares",
    description: "Con Santiago como interesante punto de partida,  el itinerario muestra al viajero la singularidad",
    main_image: "https://pfhenry/main.jpg",
    price: 2830,
    start_date: "2022-10-05",
    end_date: "2022-10-12",
    seasson: "Invierno",
    type: "Pack Large",
    featured: true,
    available: true,
    on_sale: 10,
    destinations: ["Chile"],
  },
  {
    id: 11,
    name: "En los Confines de la Tierra",
    description: "Singulares paisajes en el desierto más árido del mundo, glaciares milenarios en las zonas australes",
    main_image: "https://pfhenry/main.jpg",
    price: 2930,
    start_date: "2022-10-20",
    end_date: "2022-10-27",
    seasson: "Primavera",
    type: "Pack Large",
    featured: true,
    available: true,
    on_sale: 0,
    destinations: ["Chile"],
  },
  {
    id: 12,
    name: "Perú Tradicional",
    description: "Ofrecemos un itinerario pensado para los que dispongan de pocos días de viaje y quieran conocer",
    main_image: "https://pfhenry/main.jpg",
    price: 3190,
    start_date: "2022-09-23",
    end_date: "2022-10-15",
    seasson: "Primavera",
    type: "Pack Large",
    featured: false,
    available: true,
    on_sale: 0,
    destinations: ["Perú"],
  },
  {
    id: 13,
    name: "Paisajes Andinos",
    description: "Aunque un solo viaje no es suficiente para descubrir todas las maravillas que el Perú ofrece",
    main_image: "https://pfhenry/main.jpg",
    price: 3445,
    start_date: "2022-09-09",
    end_date: "2022-09-19",
    seasson: "Otoño",
    type: "Pack Large",
    featured: true,
    available: true,
    on_sale: 10,
    destinations: ["Perú"],
  },
  {
    id: 14,
    name: "Ruta Austral",
    description: "En diferentes destinos de Argentina es posible descubrir ecosistemas de variada riqueza, donde",
    main_image: "https://pfhenry/main.jpg",
    price: 4000,
    start_date: "2022-08-27",
    end_date: "2022-09-17",
    seasson: "Invierno",
    type: "Pack Large",
    featured: true,
    available: true,
    on_sale: 0,
    destinations: ["Argentina"],
  },
  {
    id: 15,
    name: "Patagonia Clásica",
    description: "Argentina sorprende al viajero con sus poderosos contrastes. Recorrer Patagonia es dejarse seducir",
    main_image: "https://pfhenry/main.jpg",
    price: 420,
    start_date: "2022-09-30",
    end_date: "2022-10-02",
    seasson: "Invierno",
    type: "Pack Short",
    featured: true,
    available: true,
    on_sale: 5,
    destinations: ["Argentina"],
  },
  {
    id: 16,
    name: "Colores de Colombia",
    description: "Colombia combina de manera perfecta algunos de los escenarios naturales más bellos del continente",
    main_image: "https://pfhenry/main.jpg",
    price: 645,
    start_date: "2022-09-03",
    end_date: "2022-09-10",
    seasson: "Verano",
    type: "Pack Large",
    featured: true,
    available: true,
    on_sale: 0,
    destinations: ["Colombia"],
  },
  {
    id: 17,
    name: "Colombia Mágica",
    description: "Del encanto de los centros coloniales de Bogotá y Cartagena de Indias a los bellos paisajes de Santa",
    main_image: "https://pfhenry/main.jpg",
    price: 700,
    start_date: "2022-08-23",
    end_date: "2022-08-27",
    seasson: "Otoño",
    type: "Pack Short",
    featured: true,
    available: true,
    on_sale: 15,
    destinations: ["Colombia"],
  },
  {
    id: 18,
    name: "Nicaragua Esencial",
    description: "Un atractivo recorrido por lo mejor del gran país centroamericano: lagos, ríos, volcanes, exuberantes",
    main_image: "https://pfhenry/main.jpg",
    price: 780,
    start_date: "2022-09-17",
    end_date: "2022-09-24",
    seasson: "Primavera",
    type: "Pack Large",
    featured: false,
    available: true,
    on_sale: 10,
    destinations: ["Nicaragua"],
  }
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', description: '', main_image: '', price: '', start_date: '', end_date: '', seasson: '', type: '', featured: '', available: '', on_sale: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns = [
    { field: 'id', headerName: 'User ID', width: 80, editable: false },
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'description', headerName: 'Description', width: 180, editable: true },
    {
      field: 'main_image',
      headerName: 'Main Image',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 80,
      editable: true,
    },
    {
      field: 'start_date',
      headerName: 'Start Date',
      type: 'date',
      width: 100,
      editable: true,
    },
    {
      field: 'end_date',
      headerName: 'End Date',
      type: 'date',
      width: 100,
      editable: true,
    },
    {
      field: 'seasson',
      headerName: 'Seasson',
      type: 'singleSelect',
      valueOptions: ['Invierno', 'Verano', 'Otoño', 'Primavera'],
      width: 100,
      editable: true,
    },
    {
      field: 'type',
      headerName: 'Type',
      type: 'singleSelect',
      valueOptions: ['Pack Short', 'Pack Large', 'Multidestino'],
      width: 100,
      editable: true,
    },
    {
      field: 'featured',
      headerName: 'Featured',
      type: 'singleSelect',
      valueOptions: ['true', 'false'],
      width: 100,
      editable: true,
    },
    {
      field: 'available',
      headerName: 'Available',
      type: 'singleSelect',
      valueOptions: ['true', 'false'],
      width: 100,
      editable: true,
    },
    {
      field: 'on_sale',
      headerName: 'On Sale',
      type: 'number',
      width: 100,
      editable: true,
    },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGridPro
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}