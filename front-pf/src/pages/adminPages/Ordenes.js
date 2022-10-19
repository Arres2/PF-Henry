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
        "date": "2022-11-03",
        "total_order": "2428.83",
        "status": "paid",
        "userId": "3"
    },
    {
	id: 2,
        "date": "2022-11-02",
        "total_order": "2882.38",
        "status": "pending",
        "userId": "28"
    },
    {
	id: 3,
        "date": "2022-10-13",
        "total_order": "4432.51",
        "status": "pending",
        "userId": "16"
    },
    {
	id: 4,
        "date": "2022-10-03",
        "total_order": "7041.74",
        "status": "paid",
        "userId": "12"
    },
    {
	id: 5,
        "date": "2022-09-11",
        "total_order": "5082.66",
        "status": "pending",
        "userId": "2"
    },
    {
	id: 6,
        "date": "2022-08-19",
        "total_order": "8624.34",
        "status": "pending",
        "userId": "19"
    },
    {
	id: 7,
        "date": "2022-11-10",
        "total_order": "1620.8",
        "status": "paid",
        "userId": "4"
    },
    {
	id: 8,
        "date": "2022-09-25",
        "total_order": "5714.78",
        "status": "paid",
        "userId": "2"
    },
    {
	id: 9,
        "date": "2022-08-19",
        "total_order": "4724.16",
        "status": "paid",
        "userId": "6"
    },
    {
	id: 10,
        "date": "2022-10-26",
        "total_order": "8158.94",
        "status": "pending",
        "userId": "4"
    },
    {
	id: 11,
        "date": "2022-09-19",
        "total_order": "6305.37",
        "status": "paid",
        "userId": "3"
    },
    {
	id: 12,
        "date": "2022-09-15",
        "total_order": "6351.18",
        "status": "pending",
        "userId": "18"
    },
    {
	id: 13,
        "date": "2022-08-01",
        "total_order": "2589.8",
        "status": "pending",
        "userId": "24"
    },
    {
	id: 14,
        "date": "2022-12-19",
        "total_order": "5856.03",
        "status": "paid",
        "userId": "5"
    },
    {
	id: 15,
        "date": "2022-08-26",
        "total_order": "4262.94",
        "status": "paid",
        "userId": "21"
    },
    {
	id: 16,
        "date": "2022-09-21",
        "total_order": "3075.7",
        "status": "pending",
        "userId": "3"
    },
    {
	id: 17,
        "date": "2022-10-01",
        "total_order": "5747.17",
        "status": "pending",
        "userId": "3"
    },
    {
	id: 18,
        "date": "2022-09-03",
        "total_order": "5308.09",
        "status": "paid",
        "userId": "14"
    },
    {
	id: 19,
        "date": "2022-08-07",
        "total_order": "2932.24",
        "status": "paid",
        "userId": "4"
    },
    {
	id: 20,
        "date": "2022-12-27",
        "total_order": "2004.48",
        "status": "pending",
        "userId": "3"
    },
    {
	id: 21,
        "date": "2022-09-03",
        "total_order": "8658.82",
        "status": "paid",
        "userId": "12"
    },
    {
	id: 22,
        "date": "2022-09-15",
        "total_order": "7047.08",
        "status": "pending",
        "userId": "5"
    },
    {
	id: 23,
        "date": "2022-10-27",
        "total_order": "6906.24",
        "status": "paid",
        "userId": "30"
    },
    {
	id: 24,
        "date": "2022-09-13",
        "total_order": "8609.22",
        "status": "pending",
        "userId": "30"
    },
    {
	id: 25,
        "date": "2022-07-29",
        "total_order": "7345.49",
        "status": "paid",
        "userId": "22"
    },
    {
	id: 26,
        "date": "2022-08-23",
        "total_order": "7918.81",
        "status": "pending",
        "userId": "12"
    },
    {
	id: 27,
        "date": "2022-08-26",
        "total_order": "6056.34",
        "status": "pending",
        "userId": "23"
    },
    {
	id: 28,
        "date": "2022-08-02",
        "total_order": "7511.17",
        "status": "paid",
        "userId": "18"
    },
    {
	id: 29,
        "date": "2022-12-23",
        "total_order": "5378.71",
        "status": "paid",
        "userId": "23"
    },
    {
	id: 30,
        "date": "2022-09-21",
        "total_order": "3572.47",
        "status": "paid",
        "userId": "1"
    },
    {
	id: 31,
        "date": "2022-09-26",
        "total_order": "3960.16",
        "status": "paid",
        "userId": "16"
    },
    {
	id: 32,
        "date": "2022-08-22",
        "total_order": "9361.4",
        "status": "paid",
        "userId": "28"
    },
    {
	id: 33,
        "date": "2022-09-09",
        "total_order": "2728.65",
        "status": "pending",
        "userId": "4"
    },
    {
	id: 34,
        "date": "2022-08-07",
        "total_order": "8658.12",
        "status": "pending",
        "userId": "19"
    },
    {
	id: 35,
        "date": "2022-09-22",
        "total_order": "8821.21",
        "status": "paid",
        "userId": "25"
    },
    {
	id: 36,
        "date": "2022-12-12",
        "total_order": "5418.3",
        "status": "paid",
        "userId": "5"
    },
    {
	id: 37,
        "date": "2022-09-01",
        "total_order": "1345.67",
        "status": "paid",
        "userId": "11"
    },
    {
	id: 38,
        "date": "2022-08-27",
        "total_order": "4813.14",
        "status": "pending",
        "userId": "11"
    },
    {
	id: 39,
        "date": "2022-10-04",
        "total_order": "8139.97",
        "status": "pending",
        "userId": "23"
    },
    {
	id: 40,
        "date": "2022-08-05",
        "total_order": "1113.15",
        "status": "paid",
        "userId": "26"
    },
    {
	id: 41,
        "date": "2022-08-08",
        "total_order": "8769.57",
        "status": "pending",
        "userId": "28"
    },
    {
	id: 42,
        "date": "2022-09-18",
        "total_order": "3438.45",
        "status": "pending",
        "userId": "11"
    },
    {
	id: 43,
        "date": "2022-08-26",
        "total_order": "1248.61",
        "status": "pending",
        "userId": "26"
    },
    {
	id: 44,
        "date": "2022-09-08",
        "total_order": "6527.86",
        "status": "paid",
        "userId": "7"
    },
    {
	id: 45,
        "date": "2022-11-05",
        "total_order": "4953.11",
        "status": "paid",
        "userId": "30"
    },
    {
	id: 46,
        "date": "2022-08-14",
        "total_order": "6030.64",
        "status": "paid",
        "userId": "18"
    },
    {
	id: 47,
        "date": "2022-11-03",
        "total_order": "1411.3",
        "status": "pending",
        "userId": "13"
    },
    {
	id: 48,
        "date": "2022-12-04",
        "total_order": "6035.68",
        "status": "pending",
        "userId": "10"
    },
    {
	id: 49,
        "date": "2022-08-06",
        "total_order": "6155.33",
        "status": "paid",
        "userId": "30"
    },
    {
	id: 50,
        "date": "2022-09-29",
        "total_order": "3729.05",
        "status": "pending",
        "userId": "19"
    }
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, date: '', total_order: '', status: '', userId: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      
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
    { field: 'id', headerName: 'Order ID', type: 'number', width: 80, editable: false },
    { field: 'date', headerName: 'Date Order', type: 'date', width: 180, editable: false },
    {
      field: 'total_order',
      headerName: 'Total Order',
      type: 'number',
      width: 180,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'singleSelect',
      valueOptions: ['pending', 'paid'],
      width: 180,
      editable: true,
    },
    {
      field: 'userId',
      headerName: 'Id User',
      width: 180,
      editable: false,
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