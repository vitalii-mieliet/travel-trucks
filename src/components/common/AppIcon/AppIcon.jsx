import icon from "../../../assets/icons/sprite.svg";

/**
 * Компонент AppIcon — універсальний рендерер SVG-іконок зі спрайта.
 *
 * Використовує спрайт з `../../assets/icons/sprite.svg` для відображення іконок за їхнім ID.
 * Дозволяє налаштовувати:
 * - розмір (`size`)
 * - колір заповнення (`fill`)
 * - колір обведення (`stroke`)
 * - додаткові CSS класи (`className`)
 *
 * Пропси:
 * - `name` (string, за замовчуванням: "logo") — ID іконки у спрайті
 * - `className` (string, необов’язково) — додаткові CSS класи
 * - `size` (number, за замовчуванням: 16) — ширина і висота в пікселях
 * - `fill` (string, необов’язково) — SVG `fill` (колір заливки)
 * - `stroke` (string, необов’язково) — SVG `stroke` (колір обведення)
 *
 * Приклад використання:
 * ```jsx
 * <AppIcon name="calendar" size={24} fill="#333" />
 * <AppIcon name="close" className="icon-close" stroke="#999" />
 * ```
 *
 * Доступні ID іконок (symbol id):
 * "logo", "map", "fully", "van", "alcove", "kitchen", "automatic", "petrol",
 * "heart", "gas", "water", "microwave", "bathroom", "star", "fridge",
 * "tv", "radio", "ac", "close"
 */

/**
 * AppIcon component — a universal SVG icon renderer using sprite IDs.
 *
 * Uses the sprite from `../../assets/icons/sprite.svg` to display icons via the `name` prop.
 * Allows customization of:
 * - size (`size`)
 * - fill color (`fill`)
 * - stroke color (`stroke`)
 * - additional CSS classes (`className`)
 *
 * Props:
 * - `name` (string, default: "logo") — ID of the icon in the sprite (e.g., "map", "close", etc.)
 * - `className` (string, optional) — additional CSS class names
 * - `size` (number, default: 16) — width and height of the icon in pixels
 * - `fill` (string, optional) — SVG `fill` color
 * - `stroke` (string, optional) — SVG `stroke` color
 *
 * Example usage:
 * ```jsx
 * <AppIcon name="calendar" size={24} fill="#333" />
 * <AppIcon name="close" className="icon-close" stroke="#999" />
 * ```
 *
 * Available icon IDs:
 * "logo", "map", "fully", "van", "alcove", "kitchen", "automatic", "petrol",
 * "heart", "gas", "water", "microwave", "bathroom", "star", "fridge",
 * "tv", "radio", "ac", "close"
 */

const AppIcon = ({
  name = "logo",
  className,
  size = 16,
  fill = "currentColor",
  stroke = "currentColor",
  ...rest
}) => {
  return (
    <svg
      className={className}
      fill={fill}
      stroke={stroke}
      width={size}
      height={size}
      {...rest}
    >
      <use href={`${icon}#${name}`} />
    </svg>
  );
};

export default AppIcon;
