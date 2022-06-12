import {
  Checkbox,
  createStyles,
  ScrollArea,
  Table,
  Drawer,
  Button,
  Group,
} from "@mantine/core";
import React, { useState } from "react";
import usePosts from "../../hook/userUsers";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

export default function User() {
  const { classes, cx } = useStyles();
  const [opened, setOpened] = useState(false);
  const [selection, setSelection] = useState(["1"]);

  const { status, data, error } = usePosts();

  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
            <td>
              <Checkbox
                checked={selection.includes(item.id)}
                onChange={() => toggleRow(item.id)}
                transitionDuration={0}
              />
            </td>
            <td>{item?.title}</td>
            <td>{item?.body}</td>
            <td>
              <Group position="center">
                <Button
                  className="text-slate-500 hover:text-white dark:text-slate-400 dark:hover:text-white"
                  onClick={() => setOpened(true)}
                >
                  Xem chi tiết
                </Button>
              </Group>
            </td>
          </tr>
        )}
      </>
    );
  });

  return (
    <ScrollArea>
      <Table verticalSpacing="sm">
        <thead>
          <tr>
            <th className="w-[40px]">
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={
                  selection.length > 0 && selection.length !== data.length
                }
                transitionDuration={0}
              />
            </th>
            <th>Tiêu đề</th>
            <th>Nội dung</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
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
    </ScrollArea>
  );
}
