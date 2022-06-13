import { Avatar, Badge, Button, Table } from "@mantine/core";
import React from "react";
import useUser from "../../hook/useUser";

export default function User() {
  const { data } = useUser();
  return (
    <>
      <Table horizontalSpacing="sm">
        <thead className="h-12">
          <tr>
            <th>Tên user</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th className="w-[40px]"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td className="flex items-center gap-4">
                <Avatar src={item.avatar} radius="xl" alt="" />
                {item.name}
              </td>
              <td>{item.email}</td>
              <td>
                {item.status ? (
                  <Badge variant="outline" color="lime">
                    Đang hoạt động
                  </Badge>
                ) : (
                  <Badge variant="outline" color="red">
                    Ngừng hoạt động
                  </Badge>
                )}
              </td>
              <td>
                <Button>Xem chi tiết</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
