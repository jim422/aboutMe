<div>
    <ul data-bind="foreach: platform_list" class="platform_list">
        <li data-bind="click: $parent.select_platform.bind($parent, $data), css: { 'selected': $parent.platform_id() == pid }">
            <div class="platform_item">
                <div class="cursor_pointer">
                    <img data-bind="attr: { src: $parent.icon(pid) }">

                </div>
                <span data-bind="text: platform_name"></span>
            </div>

        </li>
    </ul>
</div>