import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  FormControl
} from "@mui/material";
import { Delete, Edit, Add } from "@mui/icons-material";
import Header from "../components/Header";
import Footer from "../components/Footer";



const categories = [
  { type: "A", percentage: 23 },
  { type: "B", percentage: 34 },
  { type: "C", percentage: 45 },
];


const initialUsers = [
  {
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    gender: "Male",
    education: "Bachelor's",
    employment: "Engineer",
    score: 85,
    category: categories[0],
    isAdmin: "true",
  },
];

export default function UserManagement() {

  const [users, setUsers] = useState(initialUsers);
  const [usersData, setUsersData] = useState(users);
  const [search, setSearch] = useState("");
  const [filterField, setFilterField] = useState("id");
  const [modalData, setModalData] = useState(null);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSave = (user) => {
    if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
    setModalData(null);
  };

  const filteredUsers = users.filter((user) => {
    const fieldValue = user[filterField];
    return fieldValue !== undefined && fieldValue.toString().toLowerCase().includes(search.toLowerCase());
  });

  function UserModal({ user, onSave, onClose }) {
    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleCategoryChange = (e) => {
      setFormData({ ...formData, category: categories.find(cat => cat.type === e.target.value) });
    };

    return (
      <Dialog open={Boolean(user)} onClose={onClose}>
        <DialogTitle>{user.id ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Full Name"
            name="fullName"
            fullWidth
            margin="dense"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="dense"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Gender"
            name="gender"
            fullWidth
            margin="dense"
            value={formData.gender}
            onChange={handleChange}
          />
          <TextField
            label="Education"
            name="education"
            fullWidth
            margin="dense"
            value={formData.education}
            onChange={handleChange}
          />
          <TextField
            label="Score"
            name="score"
            fullWidth
            margin="dense"
            value={formData.score}
            onChange={handleChange}
          />
          <Select
            fullWidth
            margin="dense"
            value={formData.category.type}
            onChange={handleCategoryChange}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.type} value={cat.type}>
                {`${cat.type} (${cat.percentage}%)`}
              </MenuItem>
            ))}
          </Select>
          <TextField
            label="IsAdmin"
            name="isAdmin"
            fullWidth
            margin="dense"
            value={formData.isAdmin}
            onChange={handleChange}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => onSave(formData)} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }


  return (
    <>
      <Header />
      <div style={{ padding: 40, border: "none", outline: "none" }}>
        <Card style={{ border: "none", outline: "none" }}>
          <CardContent style={{ float: "right", display: "flex", gap: 10, alignItems: "center", border: "none", outline: "none" }}>
            <Select value={filterField} onChange={(e) => setFilterField(e.target.value)}>
              <MenuItem value="id">ID</MenuItem>
              <MenuItem value="fullName">Full Name</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="gender">Gender</MenuItem>
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="employment">Employment</MenuItem>
              <MenuItem value="score">Score</MenuItem>
              <MenuItem value="isAdmin">IsAdmin</MenuItem>
            </Select>
            <TextField
              label="Search"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </CardContent>
        </Card>

        <Table style={{ marginTop: 20 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Education</TableCell>
              <TableCell>Employment</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>IsAdmin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.education}</TableCell>
                <TableCell>{user.employment}</TableCell>
                <TableCell>{user.score}</TableCell>
                <TableCell>
                  <FormControl sx={{ m: 0, minWidth: 120, border: "none", outline: "none" }}>
                    <Select
                      fullWidth

                      value={user.category.type}
                      sx={{ border: "none" }}
                    >
                      {categories.map((cat) => (
                        <MenuItem key={cat.type} value={cat.type}>
                          {`${cat.type} (${cat.percentage}%)`}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>{user.isAdmin}</TableCell>
                <TableCell>
                  <Button onClick={() => setModalData(user)}><Edit /></Button>
                  <Button onClick={() => handleDelete(user.id)} color="error"><Delete /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {modalData !== null && (
          <UserModal user={modalData} onSave={handleSave} onClose={() => setModalData(null)} />
        )}
        <Button style={{ color: "gray", width: "100%" }} onClick={() => setModalData({ category: categories[0] })}>
          <Add />
        </Button>
      </div>
      <Footer />
    </>
  );
}
