import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getUserPoojas } from "../api/api";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/spinnerSlice";
import moment from "moment";
import { Table } from "antd";

const Poojas = () => {
  const [poojas, setPoojas] = useState([]);
  const dispatch = useDispatch();

  // Fetch User Poojas
  const fetchUserPoojas = async () => {
    try {
      dispatch(showLoading());
      const res = await getUserPoojas();
      setPoojas(res.data);
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    fetchUserPoojas();
  }, []);

  // Create antd table
  const columns = [
    {
      title: "Pandith Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.pandithInfo.firstName} {record.pandithInfo.lastName}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => moment(date).format("DD-MM-YYYY"),
    },
    {
      title: "Time",
      dataIndex: "time",
      render: (time) => moment(time).format("HH:mm"),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
    <Layout>
      <Table columns={columns} dataSource={poojas} rowKey="_id" />
    </Layout>
  );
};

export default Poojas;
