import { useState } from "react";
import styled from "styled-components";

import { TextArea, Input, HBox, Select } from "../../../shared/ui";
import { TTask, TTaskStatus } from "../../types";

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div`
  width: 640px;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

const defaultValues: TTask = {
  description: "",
  id: "",
  status: "todo",
  title: "",
  userId: "",
};

type Props = {
  data?: TTask;
  onClose: () => void;
  onRemove?: (id: string) => void;
  onSave?: (formData: TTask) => void;
};

export const TaskDetail = ({ data, onRemove, onClose, onSave }: Props) => {
  const [formData, setFormData] = useState<TTask>(data || defaultValues);

  const handleTitleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, title: value }));
  };

  const handleDescriptionChange = (value: string) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };

  const handleStatusChange = (status: TTaskStatus) => {
    setFormData((prev) => ({ ...prev, status }));
  };

  const handleSave = () => onSave?.(formData);

  return (
    <Overlay onClick={onClose}>
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Input
          onChange={handleTitleChange}
          value={formData.title}
          placeholder="Task title"
        />
        <HBox />
        <TextArea
          onChange={handleDescriptionChange}
          value={formData.description}
          placeholder="Task description"
        />
        <HBox height={32} />
        <Buttons>
          <Select
            options={[
              { title: "Todo", value: "todo" },
              { title: "Progress", value: "progress" },
              { title: "Done", value: "done" },
            ]}
            value={formData.status}
            onChange={(status) => handleStatusChange(status as TTaskStatus)}
          />
          {data && onRemove && (
            <button onClick={() => onRemove(data.id)}>Remove</button>
          )}
          {onSave && <button onClick={handleSave}>Save</button>}
        </Buttons>
      </Wrapper>
    </Overlay>
  );
};
