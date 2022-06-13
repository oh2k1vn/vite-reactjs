import { Table, Badge, Drawer, Checkbox, Button, Loader } from "@mantine/core";
import React from "react";
import useCategory from "../../hook/useCategory";
import { Edit, Trash } from "tabler-icons-react";

export default function Category() {
  const { status, data, error } = useCategory();
  const [opened, setOpened] = React.useState(false);

  const handleDrawer = () => {
    setOpened(true);
  };
  return (
    <>
      <Table horizontalSpacing="sm">
        <thead className="h-12">
          <tr>
            <th className="w-[40px]">
              <Checkbox />
            </th>
            <th>Danh muc</th>
            <th>Trạng thái</th>
            <th>Mô tả</th>
            <th>Ngày tạo</th>
            <th className="w-14"></th>
          </tr>
        </thead>
        <tbody className="relative">
          {status === "loading" ? (
            <Loader className="absolute top-1/2 left-1/2 translate-x-1/2" />
          ) : status === "error" ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Checkbox />
                  </td>
                  <td>{item.title}</td>
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
                  <td>{item.describe}</td>
                  <td>{item.createdAt.toString()}</td>
                  <td className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={handleDrawer}
                      className="hover:bg-slate-200 duration-300"
                    >
                      <Edit />
                    </Button>
                    <Button
                      variant="outline"
                      color="red"
                      className="hover:bg-slate-200 duration-300"
                    >
                      <Trash />
                    </Button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Xem chi tiêt"
        padding="xl"
        size="xl"
        position="right"
      >
        aslkdhsakldhl
      </Drawer>
    </>
  );
}
