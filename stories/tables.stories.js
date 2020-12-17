export default {
  title: 'Components/Table',
};

export const Table = () =>
  `<h1>Tables</h1>
  <h2 class="tk-mt-4h">Spacing default</h2>
  <table class="tk-table">
  <thead>
    <th>Name</th>
    <th>First</th>
    <th>Last</th>
    <th>Country</th>
  </thead>
  <tr>
    <td>Suggested</td>
    <td>David</td>
    <td>Smith</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Suggested</td>
    <td>David</td>
    <td>Smith</td>
    <td>Belgium</td>
  </tr>
  <tr>
    <td>Suggested</td>
    <td>David</td>
    <td>Smith</td>
    <td>France</td>
  </tr>
</table>
  <h2 class="tk-mt-4h">Spacing condensed</h2>
  <div class="tk-theme-condensed">
    <table class="tk-table">
      <thead>
        <th>Name</th>
        <th>First</th>
        <th>Last</th>
        <th>Country</th>
      </thead>
      <tr>
        <td>Suggested</td>
        <td>David</td>
        <td>Smith</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Suggested</td>
        <td>David</td>
        <td>Smith</td>
        <td>Belgium</td>
      </tr>
      <tr>
        <td>Suggested</td>
        <td>David</td>
        <td>Smith</td>
        <td>France</td>
      </tr>
    </table>
  </div>
`;