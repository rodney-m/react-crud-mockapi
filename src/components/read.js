import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Read() {
  const [APIData, setAPIData] = useState([]);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const onDelete = (id) => {
    axios.delete(`https://61197161cbf1b30017eb52f0.mockapi.io/fakeData/${id}`)
    .then(() => {
        getData();
    })
  };

  const getData = () => {
    axios.get(`https://61197161cbf1b30017eb52f0.mockapi.io/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}

  useEffect(() => {
    axios
      .get(`https://61197161cbf1b30017eb52f0.mockapi.io/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.length > 0
            ? APIData.map((data) => {
                return (
                  <Table.Row>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>{data.checkbox ? "yes" : "no"}</Table.Cell>
                    <Link to="/update">
                      <Table.Cell>
                        <Button onClick={() => setData(data)}>Update</Button>
                      </Table.Cell>
                    </Link>
                    <Table.Cell>
                      <Button onClick={() => onDelete(data.id)}>Delete</Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            : `...`}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;
