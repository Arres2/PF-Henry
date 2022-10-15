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
      date_message: "2022-10-06",
      userid: "1",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "close",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
  {
      id: 2,
      date_message: "2022-10-06",
      userid: "4",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "pending",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
  {
      id: 3,
      date_message: "2022-10-06",
      userid: "7",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "pending",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
  {
      id: 4,
      date_message: "2022-10-06",
      userid: "9",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "pending",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
  {
      id: 5,
      date_message: "2022-10-06",
      userid: "3",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "suspend",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
  {
      id: 6,
      date_message: "2022-10-06",
      userid: "14",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "pending",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
  {
      id: 7,
      date_message: "2022-10-06",
      userid: "21",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "close",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
  {
      id: 8,
      date_message: "2022-10-06",
      userid: "12",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "pending",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
  {
      id: 9,
      date_message: "2022-10-06",
      userid: "17",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "suspend",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
  {
      id: 10,
      date_message: "2022-10-06",
      userid: "30",
      comment: "This is a good option",
      valoration: "5",
      service : "A services was a wonderful ",
      status: "pending",
      respond: "Thank a lot",
      update_date: "2022-10-06",
      destroyTime: "null"
  },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, date_message: '', userid: '', comment: '', valoration: '', service: '', status: '', respond: '', update_date: '', isNew: true }]);
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
    { field: 'id', headerName: 'id', width: 80, editable: false },
    { field: 'date_message', headerName: 'Date', width: 100, editable: false },
    { field: 'userid', headerName: 'User ID', width: 80, editable: false },
    {
      field: 'comment',
      headerName: 'Message',
      width: 200,
      editable: false,
    },
    {
      field: 'valoration',
      headerName: 'Valoration',
      width: 80,
      editable: false,
    },
    {
      field: 'service',
      headerName: 'Service',
      width: 180,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'singleSelect',
      valueOptions: ['pending', 'close', 'suspend'],
      width: 120,
      editable: true,
    },
    {
      field: 'update_date',
      headerName: 'Update Created',
      type: 'date',
      width: 120,
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