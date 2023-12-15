import { useState } from "react";

import { EXAMPLES } from "../../data";

import TabButton from "../TabButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
          label="Components"
        />
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
          label="JSX"
        />
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
          label="Props"
        />
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
          label="State"
        />
      </menu>
      {!selectedTopic && <p>Please select a topic</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
