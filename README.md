# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

{weekSession === 1 && (
<>
<Td>
<HStack>
{checkBoxes.slice(0, 5).map((checkBox) => (
<DayCheckBox key={checkBox.id} {...checkBox} />
))}
</HStack>
</Td>
<Td>
<HStack>
{checkBoxes.slice(5, 10).map((checkBox) => (
<DayCheckBox key={checkBox.id} {...checkBox} />
))}
</HStack>
</Td>
<Td>
<HStack>
{checkBoxes.slice(10, 15).map((checkBox) => (
<DayCheckBox key={checkBox.id} {...checkBox} />
))}
</HStack>
</Td>
<Td>
<HStack>
{checkBoxes.slice(15, 20).map((checkBox) => (
<DayCheckBox key={checkBox.id} {...checkBox} />
))}
</HStack>
</Td>
</>
)}
