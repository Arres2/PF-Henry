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
          id:1,
          name: "España",
          image: "https://demos.maperez.es/pfhenry/Madrid,%20París%20y%20Lourdes%208%20días%20desde%20Madrid%20-%20main.jpg",
          region: "Europa Occidental"
      },
      {
          id:2,
          name: "Portugal",
          image: "https://demos.maperez.es/pfhenry/lisboa-main.jpg",
          region: "Europa Occidental"
      },
      {
          id:3,
          name: "Irlanda",
          image: "https://demos.maperez.es/pfhenry/irlanda-dublin-main.jpg",
          region: "Europa Occidental"
      },
      {
          id:4,
          name: "Polonia",
          image: "https://demos.maperez.es/pfhenry/polonia-main.jpg",
          region: "Europa Central"
      },
      {
          id:5,
          name: "Eslovenia",
          image: "https://demos.maperez.es/pfhenry/eslovenia.jpg",
          region: "Europa Central"
      },
      {
    id:6,
          name: "Alemania",
          image: "https://demos.maperez.es/pfhenry/Europa%20del%20Este%2010%20días%20desde%20Berlín%20-%203.jpg",
          region: "Europa Central"
      },
      {
    id:7,
          name: "Hungría",
          image: "https://demos.maperez.es/pfhenry/hungria.jpg",
          region: "Europa Central"
      },
      {
    id:8,
          name: "Austria",
          image: "https://demos.maperez.es/pfhenry/austria-main.jpg",
          region: "Europa Central"
      },
      {
    id:9,
          name: "Grecia",
          image: "https://demos.maperez.es/pfhenry/Grecia%20imprescindible%206%20días%20desde%20Atenas%20-%20main.jpg",
          region: "Europa Central"
      },
      {
          id:10,
          name: "Rumania",
          image: "https://demos.maperez.es/pfhenry/Joyas%20de%20Transilvania%208%20días%20desde%20Bucarest%20-%20main.jpg",
          region: "Europa Oriental"
      },
      {
          id:11,
          name: "Rusia",
          image: "https://demos.maperez.es/pfhenry/Joyas%20de%20Rusia%20Imperial%20en%20tren%208%20días%20de%20Moscú%20a%20San%20Petersburgo%20-%20main.jpg",
          region: "Europa Oriental"
      },
      {
          id:12,
          name: "Italia",
          image: "https://demos.maperez.es/pfhenry/Joyas%20del%20Mediterráneo%20–%20Grecia%20e%20Italia%208%20días%20desde%20Atenas%20-%20main.jpg",
          region: "Europa Central"
      },
      {
          id:13,
          name: "Francia",
          image: "https://demos.maperez.es/pfhenry/Triangulo%20monumental%2010%20días%20desde%20Barcelona%20-%20main.jpg",
          region: "Europa Occidental"
      },
      {
          id:14,
          name: "Reino Unido",
          image: "https://demos.maperez.es/pfhenry/inglaterra-londres-main.jpg",
          region: "Europa Occidental"
      },
      {
          id:15,
          name: "República Checa",
          image: "https://demos.maperez.es/pfhenry/Europa%20del%20Este%2010%20días%20desde%20Berlín%20-%20main.jpg",
          region: "Europa Central"
      },
      {
          id:16,
          name: "Suiza",
          image: "https://demos.maperez.es/pfhenry/Tour%20de%20los%20Alpes%207%20días%20desde%20Zúrich%20-%20main.jpg",
          region: "Europa Central"
      },
      {
          id:17,
          name: "Bélgica",
          image: "https://demos.maperez.es/pfhenry/belgica-brujas.jpg",
          region: "Europa Central"
      },
      {
          id:18,
          name: "Paises Bajos",
          image: "https://demos.maperez.es/pfhenry/paises-bajos-amsterdam.jpg",
          region: "Europa Central"
      },
      {
          id:19,
          name: "Croacia",
          image: "https://demos.maperez.es/pfhenry/croacia-main.jpg",
          region: "Europa Central"
      },
      {
          id:20,
          name: "Bosnia-Herzegovina",
          image: "https://demos.maperez.es/pfhenry/bosnia.jpg",
          region: "Europa Central"
      },
      {
          id:21,
          name: "China",
          image: "https://demos.maperez.es/pfhenry/shangai-a-base-de-citricos_5483ce3c_1254x836.jpg",
          region: "Asia Oriental"
      },
      {
          id:22,
          name: "Japón",
          image: "https://demos.maperez.es/pfhenry/Himeji_Castle_The_Keep_Towers.jpg",
          region: "Asia Oriental"
      },
      {
          id:23,
          name: "Corea del Sur",
          image: "https://demos.maperez.es/pfhenry/main.jpg",
          region: "Asia Oriental"
      },
      {
          id:24,
          name: "Tailandia",
          image: "https://demos.maperez.es/pfhenry/GettyImages-685734242_opt-1920x1280.jpg",
          region: "Asia Sudoriental Continental"
      },
      {
          id:25,
          name: "Camboya",
          image: "https://demos.maperez.es/pfhenry/ciudades-de-camboya.jpg",
          region: "Asia Sudoriental Continental"
      },
      {
          id:26,
          name: "Vietnam",
          image: "https://demos.maperez.es/pfhenry/Hanoi-Vietnam-1920-8.jpg",
          region: "Asia Sudoriental Continental"
      },
      {
          id:27,
          name: "India",
          image: "https://demos.maperez.es/pfhenry/India.jpg",
          region: "Asia del Sur"
      },
      {
          id:28,
          name: "EEUU",
          image: "https://demos.maperez.es/pfhenry/newYorkMain.jpg",
          region: "Norte América"
      },
      {
          id:29,
          name: "Guatemala",
          image: "https://demos.maperez.es/pfhenry/guatemalaMain.jpg",
          region: "América Central"
      },
      {
          id:30,
          name: "Argentina",
          image: "https://demos.maperez.es/pfhenry/argentinaEsencialMain.jpg",
          region: "Sudamérica"
      },
      {
          id:31,
          name: "México",
          image: "https://demos.maperez.es/pfhenry/mexicoMain.jpg",
          region: "Norte América"
      },
      {
          id:32,
          name: "Brasil",
          image: "https://demos.maperez.es/pfhenry/brasilMain.jpg",
          region: "Sudamérica"
      },
      {
          id:33,
          name: "Canadá",
          image: "https://demos.maperez.es/pfhenry/rocosasExpresMain.jpg",
          region: "Norte América"
      },
      {
          id:34,
          name: "Panamá",
          image: "https://demos.maperez.es/pfhenry/coloresDelCaribeMain.jpg",
          region: "América Central"
      },
      {
          id:35,
          name: "Costa Rica",
          image: "https://demos.maperez.es/pfhenry/costaRicaMain.jpg",
          region: "América Central"
      },
      {
          id:36,
          name: "Chile",
          image: "https://demos.maperez.es/pfhenry/desiertosLagosYGlaciaresMain.jpg",
          region: "Sudamérica"
      },
      {
          id:37,
          name: "Perú",
          image: "https://demos.maperez.es/pfhenry/peruTradicionalMain.jpg",
          region: "Sudamérica"
      },
      {
          id:38,
          name: "Colombia",
          image: "https://demos.maperez.es/pfhenry/coloresDeColombiaMain.jpg",
          region: "Sudamérica"
      },
      {
          id:39,
          name: "Nicaragua",
          image: "https://demos.maperez.es/pfhenry/nicaraguaEsencialMain.jpg",
          region: "América Central"
      },
  ];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', image: '', region: '', isNew: true }]);
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
    { field: 'image', headerName: 'Image', width: 500, editable: true },
    {
      field: 'region',
      headerName: 'Region',
      type: 'singleSelect',
      valueOptions: ['Europa Occidental', 'Europa Central', 'Europa Oriental', 'Asia Oriental', 'Asia del Sur', 'America Central', 'Sudamerica', 'Norte America'],
      width: 200,
      editable: true
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