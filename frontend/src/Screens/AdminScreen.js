import React, { useState, useEffect } from "react";
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
import WaveEffect from "../components/WaveEffect";

const fetchUsers = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/admin');
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterField, setFilterField] = useState("fullName");
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data || [])); // Ensure users is never undefined
}, []);
  
const handleSave = async (user) => {
  try {
      const response = await fetch(`http://localhost:5000/api/admin/${user._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to update user");

      // ✅ Ensure the response contains the updated user data
      if (!data.user) {
          console.warn("API did not return updated user data. Fetching again...");
          await fetchUsers().then(setUsers);
      } else {
          // ✅ Update state immediately
          setUsers((prevUsers) =>
              prevUsers.map((u) => (u._id === user._id ? data.user : u))
          );
      }

      alert("User updated successfully!");

  } catch (error) {
      console.error("Error saving user:", error);
      alert(error.message || "Failed to update user");
  }
};


  
  // ✅ DELETE USER
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  

  const filteredUsers = users.filter((user) => {
    const fieldValue = user[filterField]?.toString().toLowerCase() || "";
    return fieldValue.includes(search.toLowerCase());
  });

  function UserModal({ user, onSave, onClose }) {
    const [formData, setFormData] = useState({
      _id: user?._id || null,
      fullName: user?.fullName || "",
      emailAddress: user?.emailAddress || "",
      gender: user?.gender || "",
      education: user?.education || "",
      score: user?.score || "",
      type: user?.type || [],
      percentage: user?.percentage || [],
      isAdmin: user?.isAdmin || false,
    });

    useEffect(() => {
      setFormData({
        _id: user?._id || null,
        fullName: user?.fullName || "",
        emailAddress: user?.emailAddress || "",
        gender: user?.gender || "",
        education: user?.education || "",
        score: user?.score || "",
        type: user?.type || [],
        percentage: user?.percentage || [],
        isAdmin: user?.isAdmin || false,
      });
    }, [user]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <Dialog open={Boolean(user)} onClose={onClose}>
        <DialogTitle>{user?._id ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField label="Full Name" name="fullName" fullWidth margin="dense" value={formData.fullName} onChange={handleChange} />
          <TextField label="Email" name="emailAddress" fullWidth margin="dense" value={formData.emailAddress} onChange={handleChange} />
          <TextField label="Gender" name="gender" fullWidth margin="dense" value={formData.gender} onChange={handleChange} />
          <TextField label="Education" name="education" fullWidth margin="dense" value={formData.education} onChange={handleChange} />
          <TextField label="Score" name="score" fullWidth margin="dense" value={formData.score} onChange={handleChange} />
          {/* <Select fullWidth margin="dense" value={formData.type?.[0] || ""}>
            {formData.type.length > 0 ? (
              formData.type.map((type, index) => (
                <MenuItem key={type} value={type}>
                  {`${type} (${formData.percentage?.[index] || 0}%)`}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>No data available</MenuItem>
            )}
          </Select> */}
          <TextField label="Is Admin" name="isAdmin" fullWidth margin="dense" value={formData.isAdmin} onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={async () =>{ await onSave(formData);  onClose();}} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <>
      <Header />
      <WaveEffect title={"Reports Management"} content={""} />
      <div style={{ padding: 40 }}>
        <Card>        
          <CardContent style={{ float: "right", display: "flex", gap: 10, alignItems: "center" }}>        
            <Select value={filterField} onChange={(e) => setFilterField(e.target.value)}>
            <MenuItem value="fullName">Full Name</MenuItem>
              <MenuItem value="emailAddress">Email</MenuItem>
              <MenuItem value="gender">Gender</MenuItem>
              <MenuItem value="education">Education</MenuItem>
              <MenuItem value="employmentDetails">Employment</MenuItem>
              <MenuItem value="score">Score</MenuItem>
              <MenuItem value="isAdmin">IsAdmin</MenuItem>
            </Select>
            <TextField label="Search" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} />
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user, index) => (
              <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.emailAddress}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.education}</TableCell>
                <TableCell>{user.employmentDetails}</TableCell>
                <TableCell>{user.score}</TableCell>
                <TableCell>
                  <FormControl sx={{ m: 0, minWidth: 120 }}>
                    <Select
                      fullWidth
                      value={user.type[0]||""}                      
                    >                   
                      {user.type.map((type, index) => (
                        <MenuItem key={type} value={type} >
                          {type} ({user.percentage[index]}%)
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>{user.isAdmin === "true"? "Yes" : "No"}</TableCell>
                <TableCell>
                  <Button onClick={() => setModalData(user)}><Edit /></Button>
                  <Button onClick={() => handleDelete(user._id)} color="error"><Delete /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {modalData && <UserModal user={modalData} onSave={handleSave} onClose={() => setModalData(null)} />}
        {/* <Button onClick={() => setModalData({})}><Add /></Button> */}
      </div>
      <Footer />
    </>
  );
}
