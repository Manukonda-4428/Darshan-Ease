import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/spinnerSlice";
import { getPandithPoojas, updatePoojaStatus } from "../../api/api";
import moment from "moment";
import { Table, Button } from "antd"; // Add Button here
import toast from "react-hot-toast";

const PandithPoojas = () => {
  const [poojas, setPoojas] = useState([]);
  const dispatch = useDispatch();

  // Fetch Pandith Poojas
  const fetchPandithPoojas = async () => {
    try {
      dispatch(showLoading());
      const res = await getPandithPoojas();
      setPoojas(res.data);
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      toast.error("Failed to fetch pooja. Please try again later.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPandithPoojas();
  }, []);

  // Handle Pooja Booking Status
  const handlePoojaStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const res = await updatePoojaStatus({ poojasId: record._id, status });
      toast.success(res.message);
      fetchPandithPoojas();
    } catch (err) {
      dispatch(hideLoading());
      toast.error("Failed to update pooja status. Please try again later.");
    }
  };

  // Columns for the table
  const columns = [
    {
      title: "User Name",
      dataIndex: "userInfo",
      render: (text, record) => `${record.userInfo.firstName} ${record.userInfo.lastName}`,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => moment(text).format("DD-MM-YYYY"),
    },
    {
      title: "Time",
      dataIndex: "time",
      render: (text) => moment(text).format("HH:mm"),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <Button
            type="primary"
            onClick={() => handlePoojaStatus(record, "approved")}
          >
            Approve
          </Button>
          <Button
            type="danger"
            onClick={() => handlePoojaStatus(record, "rejected")}
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Table dataSource={poojas} columns={columns} />
    </Layout>
  );
};

export default PandithPoojas;
