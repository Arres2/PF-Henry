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
    name: "Tour de Highlights",
    description: "",
    image: "https://demos.maperez.es/pfhenry/1%20-%20Tour%20de%20Highlights.jpg",
    price: 100,
    classification: "Familiar",
  },
  {
    id: 2,
    name: "Tour de Museos",
    description: "",
    image: "https://demos.maperez.es/pfhenry/2%20-%20Tour%20de%20Museos.jpg",
    price: 150,
    classification: "Familiar",
  },
  {
    id: 3,
    name: "Tour de Monumentos",
    description: "",
    image: "https://demos.maperez.es/pfhenry/3%20-%20Tour%20de%20Monumentos.jpg",
    price: 100,
    classification: "Familiar",
  },
  {
    id: 4,
    name: "Tour Gastronomía Nacional",
    description: "",
    image: "https://demos.maperez.es/pfhenry/4%20-%20Tour%20Gastronomía%20Nacional.jpg",
    price: 150,
    classification: "Familiar",
  },
  {
    id: 5,
    name: "Pub Crawl",
    description: "",
    image: "https://demos.maperez.es/pfhenry/5%20-%20Pub%20Crawl.jpg",
    price: 150,
    classification: "Mayores",
  },
  {
    id: 6,
    name: "Tour en Bicicleta",
    description: "",
    image: "https://demos.maperez.es/pfhenry/6%20-%20Tour%20en%20Bicicleta.jpg",
    price: 50,
    classification: "Familiar",
  },
  {
    id: 7,
    name: "Tour Parques",
    description: "",
    image: "https://demos.maperez.es/pfhenry/7%20-%20Tour%20Parques.jpg",
    price: 75,
    classification: "Familiar",
  },
  {
    id: 8,
    name: "Camping en Parques Naturales",
    description: "",
    image: "https://demos.maperez.es/pfhenry/8%20-%20Camping%20en%20Parques%20Naturales.jpg",
    price: 100,
    classification: "Familiar",
  },
  {
    id: 9,
    name: "Tour a Pie",
    description: "",
    image: "https://demos.maperez.es/pfhenry/9%20-%20Tour%20a%20Pie.jpg",
    price: 50,
    classification: "Familiar",
  },
  {
    id: 10,
    name: "Tour de Arte Callejero",
    description: "",
    image: "https://demos.maperez.es/pfhenry/10%20-%20Tour%20de%20Arte%20Callejero.jpg",
    price: 75,
    classification: "Familiar",
  },
  {
    id: 11,
    name: "Ski",
    description: "",
    image: "https://demos.maperez.es/pfhenry/11%20-%20Ski.jpg",
    price: 150,
    classification: "Familiar",
  },
  {
    id: 12,
    name: "Surf",
    description: "",
    image: "https://demos.maperez.es/pfhenry/12%20-%20Surf.jpg",
    price: 150,
    classification: "Familiar",
  },
  {
    id: 13,
    name: "Bungee Jumping",
    description: "",
    image: "https://demos.maperez.es/pfhenry/13%20-%20Bungee%20Jumping.jpg",
    price: 100,
    classification: "Extremo",
  },
  {
    id: 14,
    name: "Paracaidismo",
    description: "",
    image: "https://demos.maperez.es/pfhenry/14%20-%20Paracaidismo.jpg",
    price: 250,
    classification: "Extremo",
  },
  {
    id: 15,
    name: "Parapente",
    description: "",
    image: "https://demos.maperez.es/pfhenry/15%20-%20Parapente.jpg",
    price: 250,
    classification: "Extremo",
  },
  {
    id: 16,
    name: "Kite Surf",
    description: "",
    image: "https://demos.maperez.es/pfhenry/16%20-%20Kite%20Surf.jpg",
    price: 200,
    classification: "Extremo",
  },
  {
    id: 17,
    name: "Wind Surf",
    description: "",
    image: "https://demos.maperez.es/pfhenry/17%20-%20Wind%20Surf.jpg",
    price: 200,
    classification: "Extremo",
  },
  {
    id: 18,
    name: "Ciclismo de Montaña",
    description: "",
    image: "https://demos.maperez.es/pfhenry/18%20-%20Ciclismo%20de%20Montaña.jpg",
    price: 75,
    classification: "Extremo",
  },
  {
    id: 19,
    name: "Circuito en Catamaran",
    description: "",
    image: "https://demos.maperez.es/pfhenry/19%20-%20Circuito%20en%20Catamaran.jpg",
    price: 100,
    classification: "Familiar",
  },
  {
    id: 20,
    name: "Cabalgata",
    description: "",
    image: "https://demos.maperez.es/pfhenry/20%20-%20Cabalgata.jpg",
    price: 100,
    classification: "Niños",
  },
  {
    id: 21,
    name: "Safari",
    description: "",
    image: "https://demos.maperez.es/pfhenry/21%20-%20Safari.jpg",
    price: 150,
    classification: "Familiar",
  },
  {
    id: 22,
    name: "Tour de Viñedos",
    description: "",
    image: "https://demos.maperez.es/pfhenry/22%20-%20Tour%20de%20Viñedos.jpg",
    price: 200,
    classification: "Mayores",
  },
  {
    id: 23,
    name: "Carnaval",
    description: "",
    image: "https://demos.maperez.es/pfhenry/23%20-%20Carnaval.jpg",
    price: 50,
    classification: "Niños",
  },
  {
    id: 24,
    name: "Buceo",
    description: "",
    image: "https://demos.maperez.es/pfhenry/24%20-%20Buceo.jpg",
    price: 150,
    classification: "Mayores",
  },
  {
    id: 25,
    name: "Trekking",
    description: "",
    image: "https://demos.maperez.es/pfhenry/25%20-%20Trekking.jpg",
    price: 100,
    classification: "Extremo",
  },
  {
    id: 26,
    name: "Escalar",
    description: "",
    image: "https://demos.maperez.es/pfhenry/26%20-%20Escalar.jpg",
    price: 100,
    classification: "Extremo",
  },
  {
    id: 27,
    name: "Canopy",
    description: "",
    image: "https://demos.maperez.es/pfhenry/27%20-%20Canopy.jpg",
    price: 150,
    classification: "Extremo",
  },
  {
    id: 28,
    name: "Rappel",
    description: "",
    image: "https://demos.maperez.es/pfhenry/28%20-%20Rappel.jpg",
    price: 150,
    classification: "Extremo",
  },
  {
    id: 29,
    name: "Pesca",
    description: "",
    image: "https://demos.maperez.es/pfhenry/29%20-%20Pesca.jpg",
    price: 50,
    classification: "Niños",
  },
  {
    id: 30,
    name: "Vuelo en Globo",
    description: "",
    image: "https://demos.maperez.es/pfhenry/30%20-%20Vuelo%20en%20Globo.jpg",
    price: 250,
    classification: "Familiar",
  },
  {
    id: 31,
    name: "Tour en Helicóptero",
    description: "",
    image: "https://demos.maperez.es/pfhenry/31%20-%20Tour%20en%20Helicóptero.jpg",
    price: 300,
    classification: "Familiar",
  },
  {
    id: 32,
    name: "Bus Turístico",
    description: "",
    image: "https://demos.maperez.es/pfhenry/32%20-%20Bus%20Turístico.jpg",
    price: 100,
    classification: "Familiar",
  },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', description: '', image: '', price: '', classification: '',  }]);
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
      field: 'image',
      headerName: 'Image',
      type: 'text',
      width: 300,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 100,
      editable: true,
    },
    {
      field: 'classification',
      headerName: 'Classification',
      type: 'singleSelect',
      valueOptions: ['Familiar', 'Mayores', 'Extremo', 'Niños'],
      width: 180,
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
        width: '130%',
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