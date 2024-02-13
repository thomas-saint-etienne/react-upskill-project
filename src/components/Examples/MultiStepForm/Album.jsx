export const Album = ({ updateFormData, value }) => {
  const favoriteAlbum = (e) => updateFormData("favoriteAlbum", e.target.value);
  return (
    <div>
      <label>Favorite Album:</label>
      <select value={value} onChange={favoriteAlbum}>
        <option value="">Select an Album</option>
        <option value="taylor-swift-midnights">Taylor Swift - Midnights</option>
        <option value="beyonce-renaissance">Beyonce - Renaissance</option>
        <option value="drake-21-her-loss">Drake & 21 Savage - Her Loss</option>
        <option value="sza-sos">SZA - SOS</option>
      </select>
    </div>
  );
};
